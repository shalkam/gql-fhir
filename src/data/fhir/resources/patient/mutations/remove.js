import { GraphQLNonNull, GraphQLID } from 'graphql';
import { patient } from '../../../profiles/resources/index.js';

export default {
  type: patient,
  args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLID) } }
};
