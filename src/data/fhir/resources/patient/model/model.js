import mongoose from 'mongoose';
import DomainResource from '../../domain-resource/model.js';

var schema = new DomainResource({
  identifier: { type: [ {} ] },
  active: { type: Boolean },
  active_: { type: {} },
  name: { type: [ {} ] },
  telecom: { type: [ {} ] },
  gender: { type: String },
  gender_: { type: {} },
  deceasedBoolean: { type: Boolean },
  birthDate: { type: Date },
  deceasedBoolean_: { type: {} },
  deceasedDateTime: { type: Date },
  deceasedDateTime_: { type: {} },
  address: { type: {} },
  mariatalStatus: { type: {} },
  multipleBirthBoolean: { type: Boolean },
  multipleBirthBoolean_: { type: {} },
  multipleBirthInteger: { type: Number },
  multipleBirthInteger_: { type: {} },
  contact: { type: [ {} ] },
  communication: { type: [ {} ] },
  careProvider: { type: {} },
  managingOrganization: { type: {} }
});

export default mongoose.model('patient', schema);
