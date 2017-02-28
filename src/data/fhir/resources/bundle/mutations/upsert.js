import { GraphQLNonNull, GraphQLID } from 'graphql';
import { bundle, bundleInput } from '../../../profiles/resources/index.js';

export default {
  type: bundle,
  args: { data: { name: 'data', type: new GraphQLNonNull(bundleInput) } }
};
