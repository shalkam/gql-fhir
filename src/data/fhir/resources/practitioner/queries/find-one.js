import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { practitioner } from '../../../profiles/resources/index.js';

export default {
  type: practitioner,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
