import find from './find.js';
import findOne from './find-one.js';
import { GraphQLObjectType } from 'graphql';

export default {
  episodeOfCare: {
    type: new GraphQLObjectType({ name: 'episodeOfCareQuery', fields: { find, findOne } })
  }
};
