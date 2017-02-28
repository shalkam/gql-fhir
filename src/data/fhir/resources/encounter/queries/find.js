import { GraphQLList } from 'graphql';
import { encounter } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(encounter), args: {} };
