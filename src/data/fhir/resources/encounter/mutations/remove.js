import { GraphQLNonNull, GraphQLID } from 'graphql';
import { encounter } from '../../../profiles/resources/index.js';

export default {
  type: encounter,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
