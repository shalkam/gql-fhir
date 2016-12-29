import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import input from '../types/input.js';
import model from '../model.js';
export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(input)
    }
  },
  async resolve (root, params, options) {
    const Model = new model(params.data);
    const newModel = await Model.save();
    if (!newModel) {
      throw new Error('Error adding new item');
    }
    return true;
  }
};
