import { GraphQLList } from 'graphql';
import { valueSet } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(valueSet), args: {} };
