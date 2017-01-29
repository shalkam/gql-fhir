import mongoose from 'mongoose';
import DomainResource from '../../domain-resource/model.js';

var schema = new DomainResource({
  uri: { type: {} },
  uri_: { type: {} },
  identifier: { type: [ {} ] },
  version: { type: {} },
  version_: { type: {} },
  name: { type: {} },
  name_: { type: {} },
  status: { type: {} },
  status_: { type: {} },
  experimental: { type: {} },
  experimental_: { type: {} },
  publisher: { type: {} },
  publisher_: { type: {} },
  contact: { type: [ {} ] },
  date: { type: {} },
  date_: { type: {} },
  lockedDate: { type: {} },
  lockedDate_: { type: {} },
  description: { type: {} },
  description_: { type: {} },
  useContext: { type: [ {} ] },
  immutable: { type: {} },
  immutable_: { type: {} },
  requirements: { type: {} },
  requirements_: { type: {} },
  copyright: { type: {} },
  copyright_: { type: {} },
  extensible: { type: {} },
  extensible_: { type: {} },
  codeSystem: { type: {} }
});

export default mongoose.model('valueSet', schema);
