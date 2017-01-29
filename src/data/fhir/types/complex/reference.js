import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';
import uri from '../primitive/uri.js';

export default new GraphQLObjectType({
  name: 'Reference',
  description: 'A reference from one resource to another',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...uri({ name: 'reference', description: 'Relative, internal or absolute URL reference' }),
    ...string({ name: 'display', description: 'Text alternative for the resource' })
  },
  isTypeOf: value => {
    return true;
  }
});
