import jsonToSchema from '../../helpers/gql-schema/index.js';
import patientJson from './patient.json';
import valueSetJson from './value-set.json';
import relatedPersonJson from './related-person.json';
import practitionerJson from './practitioner.json';
import encounterJson from './encounter.json';
import episodeOfCareJson from './episode-of-care.json';
import bundleJson from './bundle.json';
import searchParameterJson from './search-parameter.json';
import conformanceJson from './conformance.json';

const patientInput = jsonToSchema(patientJson, 'input');
const patient = jsonToSchema(patientJson);
const valueSetInput = jsonToSchema(valueSetJson, 'input');
const valueSet = jsonToSchema(valueSetJson);
const relatedPersonInput = jsonToSchema(relatedPersonJson, 'input');
const relatedPerson = jsonToSchema(relatedPersonJson);
const practitionerInput = jsonToSchema(practitionerJson, 'input');
const practitioner = jsonToSchema(practitionerJson);
const encounterInput = jsonToSchema(encounterJson, 'input');
const encounter = jsonToSchema(encounterJson);
const episodeOfCare = jsonToSchema(episodeOfCareJson);
const episodeOfCareInput = jsonToSchema(episodeOfCareJson, 'input');
const bundle = jsonToSchema(bundleJson);
const bundleInput = jsonToSchema(bundleJson, 'input');
const searchParameter = jsonToSchema(searchParameterJson);
const searchParameterInput = jsonToSchema(searchParameterJson, 'input');
const conformance = jsonToSchema(conformanceJson);
const conformanceInput = jsonToSchema(conformanceJson, 'input');

export {
  patient,
  patientInput,
  valueSet,
  valueSetInput,
  relatedPerson,
  relatedPersonInput,
  practitionerInput,
  practitioner,
  encounterInput,
  encounter,
  episodeOfCare,
  episodeOfCareInput,
  bundle,
  bundleInput,
  searchParameter,
  searchParameterInput,
  conformance,
  conformanceInput
};
