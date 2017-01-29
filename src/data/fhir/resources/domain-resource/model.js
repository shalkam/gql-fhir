import resource from '../resource/model/index.js';

export default class domainResource extends resource {
  constructor(schema) {
    super();
    this.add({
      ...schema,
      text: {},
      resourceType: { type: String, select: true },
      extension: { type: [ {} ] },
      modifierExtension: { type: [ {} ] },
      meta: {}
    });
  }
}
