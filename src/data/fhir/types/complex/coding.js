import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import uri from '../primitive/uri.js';
import code from '../primitive/code.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';
import boolean from '../primitive/boolean.js';

export default new GraphQLObjectType({
  name: 'Coding',
  description: 'A reference to a code defined by a terminology system',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...uri({ name: 'system', description: 'Identity of the terminology system' }),
    ...string({ name: 'version', description: 'Version of the system - if relevant' }),
    ...code({ name: 'code', description: 'Symbol in syntax defined by the system' }),
    ...string({ name: 'display', description: 'Representation defined by the system' }),
    ...boolean({
      name: 'userSelected',
      description: 'If this coding was chosen directly by the user'
    })
  },
  isTypeOf: value => true
});
