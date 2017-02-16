import mongoose from 'mongoose';
import converter from '../json-to-schema.js';
import metaJson from '../../../profiles/base/data/meta.json';

class meta {
  constructor(v) {
    this.schema = jsonToSchema(metaJson);
  }

  toBSON() {
    return this.schema;
  }
}

class metaSchema extends mongoose.SchemaType {
  cast(v) {
    return new customType(v);
  }
}

mongoose.Schema.Types.customType = customTypeSchema;
