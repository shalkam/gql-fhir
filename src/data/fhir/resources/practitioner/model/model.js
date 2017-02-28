import converter from '../../../helpers/mongoose-schema/json-to-schema.js';
import practitionerJson from '../../../profiles/resources/practitioner.json';
export default converter.init(practitionerJson);
