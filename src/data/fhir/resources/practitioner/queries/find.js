import { GraphQLList } from 'graphql';
import { practitioner } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: new GraphQLList(practitioner),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
