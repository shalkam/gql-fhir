import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { bundle } from '../../../profiles/resources/index.js';

export default { type: bundle, args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLID) } } };
