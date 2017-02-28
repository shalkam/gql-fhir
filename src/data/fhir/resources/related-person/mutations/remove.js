import { GraphQLNonNull, GraphQLID } from 'graphql';
import { relatedPerson } from '../../../profiles/resources/index.js';

export default {
  type: relatedPerson,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
