import { GraphQLNonNull, GraphQLID } from 'graphql';
import { practitioner, practitionerInput } from '../../../profiles/resources/index.js';

export default {
  type: practitioner,
  args: { data: { name: 'data', type: new GraphQLNonNull(practitionerInput) } }
};
