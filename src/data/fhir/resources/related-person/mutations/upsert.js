import { GraphQLNonNull, GraphQLID } from 'graphql';
import { relatedPerson, relatedPersonInput } from '../../../profiles/resources/index.js';

import model from '../model/index.js';

export default {
  type: relatedPerson,
  args: { data: { name: 'data', type: new GraphQLNonNull(relatedPersonInput) } },
  resolve(root, params, context, ast) {
    return model.upsert(...arguments);
  }
};
