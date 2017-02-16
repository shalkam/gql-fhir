import { GraphQLList } from 'graphql';

import { patient } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: new GraphQLList(patient),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
