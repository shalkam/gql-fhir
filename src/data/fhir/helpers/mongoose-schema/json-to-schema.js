import dot from 'dot-object';
import mongoose from 'mongoose';
import types from './type-map.js';

class converter {
  static init(json, parent) {
    converter.base = {
      primitive: [
        'boolean',
        'integer',
        'string',
        'decimal',
        'uri',
        'base64Binary',
        'instant',
        'date',
        'dateTime',
        'time',
        'code',
        'oid',
        'id',
        'markdown',
        'unsignedInt',
        'positiveInt',
        'xhtml'
      ],
      data: [
        'Reference',
        'Annotation',
        'Address',
        'Attachment',
        'Coding',
        'CodeableConcept',
        'ContactPoint',
        'BackboneElement',
        'Element',
        'ElementDefinition',
        'Extension',
        'HumanName',
        'Identifier',
        'Meta',
        'Narrative',
        'Period',
        'Quantity',
        'Range',
        'Ratio',
        'SampledData',
        'Signature',
        'Timing',
        'DomainResource',
        'Resource'
      ]
    };
    converter.schema = new mongoose.Schema({ _id: String });
    converter.backbone = {};
    converter.obj = converter.jsonToObj(json);
    converter.json = json;
    let fields = {};
    if (json.kind === 'resource') {
      fields['resourceType'] = { type: String, required: true };
    }
    Object.keys(converter.obj).map(key => {
      if (converter.obj[key]) {
        const field = converter.field(key, converter.obj[key]);
        converter.schema.add(field);
      }
    });
    if (converter.base.data.includes(converter.json.id)) return converter.schema;
    else return mongoose.model(converter.json.id, converter.schema);
  }
  static jsonToObj(json) {
    const snapshot = json.snapshot.element;
    const fields = snapshot.reduce(
      (acc, item) => {
        if (item.path !== json.id) {
          let def = {};
          Object.keys(item).map(key => {
            def['elDef' + key[0].toUpperCase() + key.slice(1)] = item[key];
          });
          acc[item.path] = def;
        }
        return acc;
      },
      {}
    );
    return dot.object(fields)[json.id];
  }
  static type(code, min, max) {
    if (!code) return code;
    let type;
    if (code === converter.json.id) {
      type = converter.schema;
    } else if (code === 'Extension' || 'Element') {
      type = {};
    } else if (types[code] !== undefined) {
      type = types[code];
    } else {
      type = code;
    }
    if (max === '*' && type !== 'BackboneElement') {
      type = [ type ];
    }
    if (min === 1 && type !== 'BackboneElement') {
      type = { type, required: true };
    }
    return type;
  }
  static xField(name, def) {
    let field = {};
    def.elDefType.map(type => {
      // uppercase for the first char of the code
      const codeToUpper = type.code[0].toUpperCase() + type.code.slice(1);
      field[name + codeToUpper] = {
        type: converter.type(type.code, def.elDefMin, def.elDefMax),
        description: def.elDefShort
      };
      if (converter.base.primitive.includes(type.code[0]) && type.code[0] !== 'id') {
        field['_' + name + codeToUpper] = {
          type: converter.input ? converter.type('ElementInput') : converter.type('Element'),
          description: def.elDefShort
        };
      }
    });
    return field;
  }
  static backboneField(name, def) {
    const self = this;
    let field = {};
    let type = {};
    Object.keys(def).map(key => {
      const field = self.field(key, def[key]);
      if (field) Object.assign(type, field);
    });
    if (def.elDefName) {
      converter.backbone[def.elDefName] = type;
    }
    if (def.elDefMax === '*') {
      type = [ type ];
    }
    if (def.elDefMin === 1) {
      type = { type, required: true };
    }
    field[name] = { type, description: def.elDefShort };
    return field;
  }
  static baseField(name, def) {
    let field = {};
    let type = converter.type(def.elDefType[0].code, def.elDefMin, def.elDefMax);
    field[name] = { type };
    if (
      converter.base.primitive.includes(def.elDefType[0].code) && def.elDefType[0].code !== 'id'
    ) {
      field['_' + name] = { type: converter.type('Element') };
    }
    return field;
  }
  static nameReferenceField(name, def) {
    let field = {};
    let type = converter.backbone[def.elDefNameReference];
    if (def.elDefMax === '*') {
      type = [ type ];
    }
    if (def.elDefMin === 1) {
      type = { type, required: true };
    }
    field[name] = { type, description: def.elDefShort };
    return field;
  }
  static binding(name, def) {
    let field = {};
    if (
      def.elDefBinding.valueSetReference &&
        def.elDefBinding.valueSetReference.reference.indexOf('administrative-gender') !== -1
    ) {
      field[name] = {
        type: new GraphQLEnumType({
          name: converter.input
            ? def.elDefPath.replace(/\./g, '') + 'EnumInput'
            : def.elDefPath.replace(/\./g, '') + 'Enum',
          values: { RED: { value: 0 }, GREEN: { value: 1 }, BLUE: { value: 2 } }
        })
      };
    }
    return field;
  }
  static field(name, def) {
    let field = {};
    if (def.hasOwnProperty('x')) {
      field = converter.xField(name, def.x);
    } else if (def.elDefType && def.elDefType[0].code === 'BackboneElement') {
      field = converter.backboneField(name, def);
    } else if (def.elDefType && def.elDefType[0].code !== 'BackboneElement') {
      field = converter.baseField(name, def);
    } else if (def.elDefNameReference) {
      field = converter.nameReferenceField(name, def);
    }
    //  else if (def.elDefType && def.elDefType[0].code === 'code' && def.elDefBinding) {
    //   field = converter.binding(name, def);
    // }
    if (def.elDefBinding) {
    }
    return field;
  }
}

export default converter;
