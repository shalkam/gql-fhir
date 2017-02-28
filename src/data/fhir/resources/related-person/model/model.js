import converter from '../../../helpers/mongoose-schema/json-to-schema.js';
import relatedPersonJson from '../../../profiles/resources/related-person.json';

export default converter.init(relatedPersonJson);
