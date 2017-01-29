import { GraphQLInterfaceType, GraphQLString } from 'graphql';
import narrative from '../../types/complex/narrative.js';
import string from '../../types/primitive/string.js';
export default new GraphQLInterfaceType({
  name: 'DomainResource',
  fields: { ...string({ name: 'resourceType', input: null }), text: { type: narrative } }
});
