import { GraphQLNonNull, GraphQLID } from 'graphql';
import { encounter, encounterInput } from '../../../profiles/resources/index.js';

export default {
  type: encounter,
  args: { data: { name: 'data', type: new GraphQLNonNull(encounterInput) } }
};
