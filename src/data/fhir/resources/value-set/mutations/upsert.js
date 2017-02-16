import { GraphQLNonNull, GraphQLID } from 'graphql';
import { valueSet, valueSetInput } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: valueSet,
  args: { data: { name: 'data', type: new GraphQLNonNull(valueSetInput) } },
  resolve(root, params, context, ast) {
    return model.upsert(...arguments);
  }
};
