import { GraphQLNonNull, GraphQLID } from 'graphql';
import { encounter, encounterInput } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: encounter,
  args: { data: { name: 'data', type: new GraphQLNonNull(encounterInput) } },
  resolve(root, params, context, ast) {
    return model.upsert(...arguments);
  }
};
