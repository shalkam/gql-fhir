import { GraphQLList } from 'graphql';
import { patient } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(patient), args: {} };
