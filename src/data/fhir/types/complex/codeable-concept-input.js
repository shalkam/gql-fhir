import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import codingInput from './coding-input.js';
import extensionInput from '../base/extension-input.js';
import elementInterfaceInput from '../base/element-interface-input.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';

export default new GraphQLInputObjectType({
  name: 'CodeableConceptInput',
  description: 'Plain text representation of the concept',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    coding: {
      type: new GraphQLList(codingInput),
      description: 'Code defined by a terminology system'
    },
    ...string({
      name: 'text',
      description: 'Plain text representation of the concept',
      input: true
    })
  },
  isTypeOf: value => true
});
