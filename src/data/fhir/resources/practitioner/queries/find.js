import { GraphQLList } from 'graphql';
import { practitioner } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(practitioner), args: {} };
