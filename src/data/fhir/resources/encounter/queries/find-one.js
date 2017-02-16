import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { encounter } from '../../../profiles/resources/index.js';

import model from '../model/index.js';

export default {
  type: encounter,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } },
  resolve(root, params, context, ast) {
    return model.findOne(...arguments);
  }
};
