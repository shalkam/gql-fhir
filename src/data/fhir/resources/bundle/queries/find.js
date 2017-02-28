import { GraphQLList } from 'graphql';
import { bundle } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(bundle), args: {} };
