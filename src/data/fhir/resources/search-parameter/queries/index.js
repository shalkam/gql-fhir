import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  searchParameter: {
    type: new GraphQLObjectType({ name: 'searchParameterQuery', fields: { find, findOne } })
  }
};
