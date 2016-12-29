import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import type from '../types/index.js';
import getProjection from '../../../get-projection';
import model from '../model.js';

export default {
  type: type,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options, ast) {
    const projection = getProjection(ast.operation.selectionSet.selections[0]);
    return model
      .findById(params.id)
      .select(projection)
      .exec();
  }
};
