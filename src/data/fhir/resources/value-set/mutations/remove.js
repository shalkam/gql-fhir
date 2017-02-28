import { GraphQLNonNull, GraphQLID } from 'graphql';
import { valueSet } from '../../../profiles/resources/index.js';

export default {
  type: valueSet,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
