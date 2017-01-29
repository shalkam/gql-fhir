import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  practitioner: {
    type: new GraphQLObjectType({ name: 'practitionerQuery', fields: { find, findOne } }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
