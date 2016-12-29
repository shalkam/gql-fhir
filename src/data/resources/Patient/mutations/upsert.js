import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import shortid from 'shortid';
import getProjection from '../../../get-projection';
import type from '../types/index.js';
import input from '../types/input.js';
import model from '../model.js';

export default {
  type: type,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(input)
    }
  },
  async resolve (root, params, options, ast) {
    const projection = getProjection(ast.operation.selectionSet.selections[0]);
    if(!params.data._id) {
      params.data._id = shortid.generate()
    }
    const updated = await model
    .findByIdAndUpdate(params.data._id, params.data, {
      new: true,
      upsert: true,
      select: projection
    })
    .exec();

    if (!updated) {
      throw new Error('Error updating');
    }

    return updated;
  }
};
