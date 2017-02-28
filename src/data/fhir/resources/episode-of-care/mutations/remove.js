import { GraphQLNonNull, GraphQLID } from 'graphql';
import { episodeOfCare } from '../../../profiles/resources/index.js';

export default {
  type: episodeOfCare,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
