import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';
import uri from '../primitive/uri.js';

export default new GraphQLInputObjectType({
  name: 'ReferenceInput',
  description: 'A reference from one resource to another',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...uri({
      name: 'reference',
      description: 'Relative, internal or absolute URL reference',
      input: true
    }),
    ...string({ name: 'display', description: 'Text alternative for the resource', input: true })
  },
  isTypeOf: value => {
    return true;
  }
});
