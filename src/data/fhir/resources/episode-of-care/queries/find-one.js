import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { episodeOfCare } from '../../../profiles/resources/index.js';

export default {
  type: episodeOfCare,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
