import { GraphQLNonNull, GraphQLID } from 'graphql';
import { patient } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: patient,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.remove(...arguments);
  }
};
