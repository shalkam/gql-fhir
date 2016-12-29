import Resource from '../Resource/model.js';

export default class DomainResource extends Resource {
  constructor(schema) {
    super()
    this.add({
      ...schema,
      text: String
    })
  }
}
