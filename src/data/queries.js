import patient from './fhir/resources/patient/queries';
import user from './common/acl/user/queries';
import valueSet from './fhir/resources/value-set/queries/index.js';
import resources from './fhir/resources/resource/queries/index.js';
import practitioner from './fhir/resources/practitioner/queries/index.js';
export default { ...patient, ...user, ...valueSet, ...resources, ...practitioner };
