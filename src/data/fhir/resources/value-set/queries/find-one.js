import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { valueSet } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: valueSet,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.findOne(...arguments);
  }
};
