import mongoose from 'mongoose';
import shortid from 'shortid';
class resource extends mongoose.Schema {
  constructor(schema) {
    super();
    this.add({
      _id: { type: String, default: shortid.generate },
      id: { type: {} },
      id_: { type: {} },
      implicitRules: { type: String },
      implicitRules_: { type: {} },
      language: { type: String },
      language_: { type: {} },
      ...schema
    });
  }
}
// resource.pre('save', function(next) {
//   if (this._id === null) {
//     this.name = shortid.generate();
//   }
//   next();
// });
export default resource;
