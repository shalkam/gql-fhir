import { GraphQLNonNull, GraphQLID } from 'graphql';
import { bundle } from '../../../profiles/resources/index.js';

export default {
  type: bundle,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
