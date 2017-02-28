import { GraphQLNonNull, GraphQLID } from 'graphql';
import { relatedPerson, relatedPersonInput } from '../../../profiles/resources/index.js';

export default {
  type: relatedPerson,
  args: { data: { name: 'data', type: new GraphQLNonNull(relatedPersonInput) } }
};
