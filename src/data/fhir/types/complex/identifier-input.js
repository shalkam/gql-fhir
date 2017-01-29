import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import extensionInput from '../base/extension-input.js';
import codeableConceptInput from './codeable-concept-input.js';
import periodInput from './period-input.js';
import uri from '../primitive/uri.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLInputObjectType({
  name: 'IdentifierInput',
  description: 'An identifier intended for computation',
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...code({
      name: 'use',
      description: 'usual | official | temp | secondary (If known)',
      input: true
    }),
    type: { type: codeableConceptInput, description: 'Description of identifier' },
    ...string({ name: 'value', description: 'The value that is unique', input: true }),
    ...uri({ name: 'system', description: 'The namespace for the identifier', input: true }),
    period: { type: periodInput, description: 'Time period when id is/was valid for use' }
  }
});
