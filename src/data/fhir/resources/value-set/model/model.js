import converter from '../../../helpers/mongoose-schema/json-to-schema.js';
import valueSetJson from '../../../profiles/resources/value-set.json';
const model = converter.init(valueSetJson);
export default model;
