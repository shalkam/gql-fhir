import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLBoolean } from 'graphql';
import extensionInput from '../../base/extension-input.js';
import elementInput from '../../base/element-input.js';
import codingInput from '../../complex/coding-input.js';
import uri from '../../primitive/uri.js';
import code from '../../primitive/code.js';
import string from '../../primitive/string.js';
import boolean from '../../primitive/boolean.js';

const designation = new GraphQLInputObjectType({
  name: 'designationInput',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extensionInput) },
    ...code({ name: 'language', description: 'Human language of the designation', input: true }),
    use: { type: codingInput, description: 'Details how this designation would be used' },
    ...string({ name: 'value', description: 'The text value for this designation', input: true })
  }
});

const concept = new GraphQLInputObjectType({
  name: 'ValueSetCodesystemConceptInput',
  description: 'Concepts in the code system',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extensionInput) },
    ...code({ name: 'code', description: 'Code that identifies concept', input: true }),
    ...boolean({ name: 'abstract', description: 'If this code is not for use as a real concept', input: true }),
    display: { type: GraphQLString, description: 'Text to display to the user' },
    display_: { type: elementInput },
    definition: { type: GraphQLString, description: 'Formal definition' },
    definition_: { type: elementInput },
    designation: { description: 'Additional representations for the concept', type: new GraphQLList(designation) },
    concept: {
      get type() {
        return new GraphQLList(concept);
      },
      description: 'Child Concepts (is-a/contains/categorizes)'
    }
  }
});

export default new GraphQLInputObjectType({
  name: 'ValueSetCodeSystemInput',
  description: 'An inline code system, which is part of this value set Codes must be unique Within a code system definition, all the codes SHALL be unique',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extensionInput) },
    ...uri({ name: 'system', description: 'URI to identify the code system (e.g. in Coding.system)', input: true }),
    version: { type: GraphQLString, description: 'If code comparison is case sensitive' },
    version_: { type: elementInput },
    caseSensitive: { type: GraphQLBoolean, description: 'If code comparison is case sensitive' },
    caseSensitive_: { type: elementInput },
    concept: { type: new GraphQLList(concept), description: 'Concepts in the code system' }
  }
});
