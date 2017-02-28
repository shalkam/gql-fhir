import converter from '../../../helpers/mongoose-schema/json-to-schema.js';
import patientJson from '../../../profiles/resources/patient.json';
export default converter.init(patientJson);
