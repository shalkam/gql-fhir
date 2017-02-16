import converter from './json-to-schema.js';
import metaJson from '../../profiles/base/data/meta.json';
import elementJson from '../../profiles/base/abstract/element.json';
import extensionJson from '../../profiles/base/abstract/extension.json';
import referenceJson from '../../profiles/base/data/reference.json';

export default {
  uri: String,
  string: String,
  code: String,
  base64Binary: String,
  markdown: String,
  time: String,
  oid: String,
  id: String,
  integer: Number,
  decimal: Number,
  instant: Date,
  date: Date,
  positiveInt: Number,
  unsignedInt: Number,
  boolean: Boolean,
  dateTime: Date,
  xhtml: String,
  get Meta() {
    return converter.init(metaJson);
  },
  get Element() {
    return converter.init(elementJson);
  },
  get Extension() {
    return converter.init(extensionJson);
  },
  get Reference() {
    return converter.init(referenceJson);
  }
};
