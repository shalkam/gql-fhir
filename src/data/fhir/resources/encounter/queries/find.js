import { GraphQLList } from 'graphql';
import { encounter } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: new GraphQLList(encounter),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
