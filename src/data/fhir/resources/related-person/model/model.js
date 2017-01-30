import mongoose from 'mongoose';
import DomainResource from '../../domain-resource/model.js';

var schema = new DomainResource({
  identifier: { type: {} },
  patient: { type: {} },
  relationship: { type: {} },
  name: { type: {} },
  telecom: { type: {} },
  gender: { type: {} },
  birthDate: { type: {} },
  address: { type: {} },
  period: { type: {} }
});

export default mongoose.model('relatedPerson', schema);
