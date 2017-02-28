import { GraphQLNonNull, GraphQLID } from 'graphql';
import { valueSet, valueSetInput } from '../../../profiles/resources/index.js';

export default {
  type: valueSet,
  args: { data: { name: 'data', type: new GraphQLNonNull(valueSetInput) } }
};
