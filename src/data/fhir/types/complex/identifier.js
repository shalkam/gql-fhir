import { GraphQLObjectType, GraphQLList } from 'graphql';
import extension from '../base/extension.js';
import codeableConcept from './codeable-concept.js';
import period from './period.js';
import uri from '../primitive/uri.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLObjectType({
  name: 'Identifier',
  description: 'An identifier intended for computation',
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...code({ name: 'use', description: 'usual | official | temp | secondary (If known)' }),
    type: { type: codeableConcept, description: 'Description of identifier' },
    ...string({ name: 'value', description: 'The value that is unique' }),
    ...uri({ name: 'system', description: 'The namespace for the identifier' }),
    period: { type: period, description: 'Time period when id is/was valid for use' }
  }
});
