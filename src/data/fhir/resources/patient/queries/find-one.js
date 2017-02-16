import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { patient } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: patient,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.findOne(...arguments);
  }
};
