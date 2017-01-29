import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import codingInput from './coding-input.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';
import instant from '../primitive/instant.js';
import uri from '../primitive/uri.js';

export default new GraphQLInputObjectType({
  name: 'MetaInput',
  description: 'Metadata about a resource',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...id({ name: 'versionId', description: 'Version specific identifier', input: true }),
    ...instant({
      name: 'lastUpdated',
      description: 'When the resource version last changed',
      input: true
    }),
    ...uri({
      name: 'profile',
      description: 'Profiles this resource claims to conform to',
      input: true,
      multiple: true
    }),
    security: {
      type: new GraphQLList(codingInput),
      description: 'Security Labels applied to this resource All Security Labels (Extensible)'
    },
    tags: { type: new GraphQLList(codingInput), description: 'Tags applied to this resource' }
  },
  isTypeOf: value => {
    return true;
  }
});
