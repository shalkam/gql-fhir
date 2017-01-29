import { GraphQLObjectType, GraphQLList } from 'graphql';
import coding from './coding.js';
import extension from '../base/extension.js';
import elementInterface from '../base/element-interface.js';
import id from '../primitive/id.js';
import string from '../primitive/string.js';

export default new GraphQLObjectType({
  name: 'CodeableConcept',
  description: 'Plain text representation of the concept',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    coding: { type: new GraphQLList(coding), description: 'Code defined by a terminology system' },
    ...string({ name: 'text', description: 'Plain text representation of the concept' })
  },
  isTypeOf: value => true
});
