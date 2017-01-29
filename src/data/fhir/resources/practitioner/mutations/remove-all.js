import { GraphQLBoolean } from 'graphql';

import model from '../model/index.js';

export default {
  type: GraphQLBoolean,
  resolve(root, params, context, ast) {
    return model.removeAll(...arguments);
  }
};
