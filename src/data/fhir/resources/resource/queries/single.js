import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import type from '../types/index.js';
import model from '../model/index.js';

export default {
  type: type,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, context, ast) {
    return model.findOne(params, context, ast);
  }
};
