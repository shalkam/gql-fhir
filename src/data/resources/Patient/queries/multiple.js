import {
  GraphQLList
} from 'graphql';

import type from '../types/index.js';
import getProjection from '../../../get-projection';
import model from '../model.js';

export default {
  type: new GraphQLList(type),
  args: {},
  resolve (root, params, options, ast) {
    const projection = getProjection(ast.operation.selectionSet.selections[0]);
    return model
      .find()
      .select(projection)
      .exec();
  }
};
