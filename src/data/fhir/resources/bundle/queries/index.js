import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  bundle: { type: new GraphQLObjectType({ name: 'bundleQuery', fields: { find, findOne } }) }
};
