import { GraphQLNonNull, GraphQLID } from 'graphql';
import { searchParameter, searchParameterInput } from '../../../profiles/resources/index.js';

export default {
  type: searchParameter,
  args: { data: { name: 'data', type: new GraphQLNonNull(searchParameterInput) } }
};
