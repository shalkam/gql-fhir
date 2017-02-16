import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  encounter: {
    type: new GraphQLObjectType({ name: 'encounterQuery', fields: { find, findOne } }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
