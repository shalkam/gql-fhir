import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import coding from './coding.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';
import instant from '../primitive/instant.js';
import uri from '../primitive/uri.js';

export default new GraphQLObjectType({
  name: 'Meta',
  description: 'Metadata about a resource',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...id({ name: 'versionId', description: 'Version specific identifier' }),
    ...instant({ name: 'lastUpdated', description: 'When the resource version last changed' }),
    ...uri({
      name: 'profile',
      description: 'Profiles this resource claims to conform to',
      multiple: true
    }),
    security: {
      type: new GraphQLList(coding),
      description: 'Security Labels applied to this resource All Security Labels (Extensible)'
    },
    tags: { type: new GraphQLList(coding), description: 'Tags applied to this resource' }
  },
  isTypeOf: value => {
    return true;
  }
});
