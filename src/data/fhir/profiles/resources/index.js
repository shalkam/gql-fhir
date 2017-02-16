import jsonToSchema from '../../helpers/gql-schema/index.js';
import patientJson from './patient.json';
import valueSetJson from './value-set.json';
import relatedPersonJson from './related-person.json';
import practitionerJson from './practitioner.json';
import encounterJson from './encounter.json';

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
  encounter
};
