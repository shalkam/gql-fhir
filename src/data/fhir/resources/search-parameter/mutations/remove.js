import { GraphQLNonNull, GraphQLID } from 'graphql';
import { searchParameter } from '../../../profiles/resources/index.js';

export default {
  type: searchParameter,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
