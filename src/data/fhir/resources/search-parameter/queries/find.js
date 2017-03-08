import { GraphQLList } from 'graphql';
import { searchParameter } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(searchParameter), args: {} };
