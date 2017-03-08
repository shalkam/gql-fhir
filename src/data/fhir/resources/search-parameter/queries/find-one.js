import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { searchParameter } from '../../../profiles/resources/index.js';

export default {
  type: searchParameter,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
