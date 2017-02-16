import { GraphQLList } from 'graphql';

import { valueSet } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: new GraphQLList(valueSet),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
