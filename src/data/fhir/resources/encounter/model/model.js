import mongoose from 'mongoose';
import DomainResource from '../../domain-resource/model.js';

var schema = new DomainResource({
  identifier: { type: {} },
  active: { type: {} },
  name: { type: {} },
  address: { type: {} },
  gender: { type: {} },
  brithDate: { type: {} },
  practitionerRole: { type: {} },
  qualification: { type: {} },
  communication: { type: {} }
});

export default mongoose.model('practitioner', schema);
