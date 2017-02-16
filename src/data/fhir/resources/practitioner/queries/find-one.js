import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { practitioner } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: practitioner,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.findOne(...arguments);
  }
};
