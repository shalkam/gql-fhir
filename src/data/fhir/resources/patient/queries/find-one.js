import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { patient } from '../../../profiles/resources/index.js';

export default { type: patient, args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } } };
