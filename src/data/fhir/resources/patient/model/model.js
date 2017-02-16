import mongoose from 'mongoose';
import DomainResource from '../../domain-resource/model.js';
import converter from '../../../helpers/mongoose-schema/json-to-schema.js';
import patientJson from '../../../profiles/resources/patient.json';
// var schema = new DomainResource({
//   identifier: { type: [ {} ] },
//   active: { type: Boolean },
//   active_: { type: {} },
//   name: { type: [ {} ] },
//   telecom: { type: [ {} ] },
//   gender: { type: String },
//   gender_: { type: {} },
//   deceasedBoolean: { type: Boolean },
//   birthDate: { type: Date },
//   deceasedBoolean_: { type: {} },
//   deceasedDateTime: { type: Date },
//   deceasedDateTime_: { type: {} },
//   address: { type: {} },
//   mariatalStatus: { type: {} },
//   multipleBirthBoolean: { type: Boolean },
//   multipleBirthBoolean_: { type: {} },
//   multipleBirthInteger: { type: Number },
//   multipleBirthInteger_: { type: {} },
//   contact: { type: [ {} ] },
//   communication: { type: [ {} ] },
//   careProvider: { type: {} },
//   managingOrganization: { type: {} }
// });
const model = converter.init(patientJson);
// console.log(model.schema);
export default model;
