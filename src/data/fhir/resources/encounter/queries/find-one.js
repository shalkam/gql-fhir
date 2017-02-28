import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { encounter } from '../../../profiles/resources/index.js';

export default {
  type: encounter,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
