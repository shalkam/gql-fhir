import { GraphQLNonNull, GraphQLID } from 'graphql';
import { episodeOfCare, episodeOfCareInput } from '../../../profiles/resources/index.js';

export default {
  type: episodeOfCare,
  args: { data: { name: 'data', type: new GraphQLNonNull(episodeOfCareInput) } }
};
