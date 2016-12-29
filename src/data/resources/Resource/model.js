import mongoose from 'mongoose';

export default class Resource extends mongoose.Schema {
  constructor(schema) {
    super()
    this.add({
      _id: {type: String},
      implicitRules: {type: String},
      language: {type: String},
      ...schema
    })
  }
}
