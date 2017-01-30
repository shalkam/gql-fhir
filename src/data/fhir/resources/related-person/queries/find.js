import { GraphQLList } from 'graphql';

import type from '../types/index.js';
import model from '../model/index.js';

export default {
  type: new GraphQLList(type),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
