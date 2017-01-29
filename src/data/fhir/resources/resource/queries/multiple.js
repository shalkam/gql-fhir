import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import interfaceType from '../interface.js';
import resources from '../model/resources.js';
export default {
  type: new GraphQLList(interfaceType),
  args: { resourceType: { name: 'resourceType', type: new GraphQLNonNull(GraphQLString) } },
  resolve(root, params, context, ast) {
    return resources[params.resourceType].find(...arguments);
  }
};
