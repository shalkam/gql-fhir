import patient from './fhir/resources/patient/mutations';
import user from './common/acl/user/mutations/index.js';
// import role from './common/acl/role/mutations/index.js';
import valueSet from './fhir/resources/value-set/mutations/index.js';
import practitioner from './fhir/resources/practitioner/mutations/index.js';
import relatedPerson from './fhir/resources/related-person/mutations/index.js';
import encounter from './fhir/resources/encounter/mutations/index.js';
export default {
  //  ...role
  ...practitioner,
  ...user,
  ...valueSet,
  ...patient,
  ...relatedPerson,
  ...encounter
};
