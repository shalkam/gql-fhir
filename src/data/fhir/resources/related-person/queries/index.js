import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  relatedPerson: {
    type: new GraphQLObjectType({ name: 'relatedPersonQuery', fields: { find, findOne } }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
