import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { relatedPerson } from '../../../profiles/resources/index.js';

export default {
  type: relatedPerson,
  args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } }
};
