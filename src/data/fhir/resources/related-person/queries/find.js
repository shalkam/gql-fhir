import { GraphQLList } from 'graphql';
import { relatedPerson } from '../../../profiles/resources/index.js';

export default { type: new GraphQLList(relatedPerson), args: {} };
