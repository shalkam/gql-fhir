import dot from 'dot-object';
import { GraphQLInputObjectType, GraphQLObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import types from './type-map.js';

export default class fields {
  static init(json, gqlType, schema) {
    fields.base = {
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
    Object.assign(fields, {
      backbone: {},
      objType: { input: GraphQLInputObjectType, output: GraphQLObjectType },
      obj: fields.jsonToObj(json),
      json,
      gqlType,
      schema
    });
    let fieldsOut = {};
    if (json.kind === 'resource') {
      fieldsOut['resourceType'] = { type: fields.type('string', 0, 1) };
    }
    Object.keys(fields.obj).map(key => {
      if (fields.obj[key]) {
        const field = this.field(key, fields.obj[key]);
        Object.assign(fieldsOut, field);
      }
    });
    return fieldsOut;
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
    code = fields.gqlType === 'input' && !fields.base.primitive.includes(code)
      ? code + 'Input'
      : code;
    let type = types[code] !== undefined
      ? types[code]
      : code === fields.json.id ? fields.schema : code;
    if (max === '*' && type !== 'BackboneElement') {
      type = new GraphQLList(type);
    }
    if (min === 1 && type !== 'BackboneElement') {
      type = new GraphQLNonNull(type);
    }
    return type;
  }
  static xField(name, def) {
    let field = {};
    def.elDefType.map(type => {
      // uppercase for the first char of the code
      const codeToUpper = type.code[0].toUpperCase() + type.code.slice(1);
      field[name + codeToUpper] = {
        type: fields.type(type.code, def.elDefMin, def.elDefMax),
        description: def.elDefShort
      };
      if (fields.base.primitive.includes(type.code[0]) && type.code[0] !== 'id') {
        field['_' + name + codeToUpper] = {
          type: fields.input ? fields.type('ElementInput') : fields.type('Element'),
          description: def.elDefShort
        };
      }
    });
    return field;
  }
  static backboneField(name, def) {
    const self = this;
    let field = {};
    let type = new fields.objType[fields.gqlType === 'input' ? 'input' : 'output']({
      name: fields.gqlType === 'input'
        ? def.elDefPath.replace(/\./g, '') + 'Input'
        : def.elDefPath.replace(/\./g, ''),
      description: def.elDefShort,
      fields: () => {
        let subFields = {};
        Object.keys(def).map(key => {
          const field = self.field(key, def[key]);
          if (field) Object.assign(subFields, field);
        });
        return subFields;
      }
    });
    if (def.elDefName) {
      fields.backbone[def.elDefName] = type;
    }
    if (def.elDefMax === '*') {
      type = new GraphQLList(type);
    }
    if (def.elDefMin === 1) {
      type = new GraphQLNonNull(type);
    }
    field[name] = { type, description: def.elDefShort };
    return field;
  }
  static baseField(name, def) {
    let field = {};
    let type = fields.type(def.elDefType[0].code, def.elDefMin, def.elDefMax);
    field[name] = { type };
    if (fields.base.primitive.includes(def.elDefType[0].code) && def.elDefType[0].code !== 'id') {
      field['_' + name] = { type: fields.type('Element') };
    }
    return field;
  }
  static nameReferenceField(name, def) {
    let field = {};
    let type = fields.backbone[def.elDefNameReference];
    if (def.elDefMax === '*') {
      type = new GraphQLList(type);
    }
    if (def.elDefMin === 1) {
      type = new GraphQLNonNull(type);
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
          name: fields.input
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
      field = fields.xField(name, def.x);
    } else if (def.elDefType && def.elDefType[0].code === 'BackboneElement') {
      field = fields.backboneField(name, def);
    } else if (def.elDefType && def.elDefType[0].code !== 'BackboneElement') {
      field = fields.baseField(name, def);
    } else if (def.elDefNameReference) {
      field = fields.nameReferenceField(name, def);
    }
    //  else if (def.elDefType && def.elDefType[0].code === 'code' && def.elDefBinding) {
    //   field = fields.binding(name, def);
    // }
    if (def.elDefBinding) {
    }
    return field;
  }
}
