import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  valueSet: {
    type: new GraphQLObjectType({ name: 'valueSetQuery', fields: { find, findOne } }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
