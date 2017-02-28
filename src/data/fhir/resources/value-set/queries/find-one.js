import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { valueSet } from '../../../profiles/resources/index.js';

export default {
  type: valueSet,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
