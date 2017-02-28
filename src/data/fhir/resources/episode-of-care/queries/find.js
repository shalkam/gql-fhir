import { GraphQLList } from 'graphql';
import { episodeOfCare } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(episodeOfCare), args: {} };
