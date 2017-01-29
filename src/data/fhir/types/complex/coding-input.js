import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import uri from '../primitive/uri.js';
import code from '../primitive/code.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';
import boolean from '../primitive/boolean.js';

export default new GraphQLInputObjectType({
  name: 'CodingInput',
  description: 'A reference to a code defined by a terminology system',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...uri({ name: 'system', description: 'Identity of the terminology system', input: true }),
    ...string({ name: 'version', description: 'Version of the system - if relevant', input: true }),
    ...code({ name: 'code', description: 'Symbol in syntax defined by the system', input: true }),
    ...string({
      name: 'display',
      description: 'Representation defined by the system',
      input: true
    }),
    ...boolean({
      name: 'userSelected',
      description: 'If this coding was chosen directly by the user',
      input: true
    })
  },
  isTypeOf: value => true
});
