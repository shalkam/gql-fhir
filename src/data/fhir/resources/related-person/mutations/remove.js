import { GraphQLNonNull, GraphQLID } from 'graphql';
import type from '../types/index.js';
import model from '../model/index.js';

export default {
  type: type,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.remove(...arguments);
  }
};
