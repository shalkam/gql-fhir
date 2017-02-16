import { GraphQLList } from 'graphql';

import { relatedPerson } from '../../../profiles/resources/index.js';

import model from '../model/index.js';

export default {
  type: new GraphQLList(relatedPerson),
  args: {},
  resolve(root, params, context, ast) {
    return model.find(...arguments);
  }
};
