import patient from './fhir/resources/patient/queries';
import user from './common/acl/user/queries';
import valueSet from './fhir/resources/value-set/queries/index.js';
// import resources from './fhir/resources/resource/queries/index.js';
import practitioner from './fhir/resources/practitioner/queries/index.js';
import relatedPerson from './fhir/resources/related-person/queries/index.js';
import encounter from './fhir/resources/encounter/queries/index.js';
export default {
  ...user,
  ...valueSet,
  // ...resources,
  ...practitioner,
  ...relatedPerson,
  ...patient,
  ...encounter
};
