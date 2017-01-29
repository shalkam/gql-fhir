import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLBoolean } from 'graphql';
import extension from '../../base/extension.js';
import uri from '../../primitive/uri.js';
import element from '../../base/element.js';
import coding from '../../complex/coding.js';
import code from '../../primitive/code.js';

const designation = new GraphQLObjectType({
  name: 'designation',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extension) },
    ...code({ name: 'language', description: 'Human language of the designation' }),
    use: { type: coding, description: 'Details how this designation would be used' },
    value: { type: GraphQLString, description: 'The text value for this designation' },
    value_: { type: element }
  }
});

const concept = new GraphQLObjectType({
  name: 'ValueSetCodesystemConcept',
  description: 'Concepts in the code system',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extension) },
    ...code({ name: 'code', description: 'Code that identifies concept' }),
    abstract: { type: GraphQLBoolean, description: 'If this code is not for use as a real concept' },
    abstract_: { type: element },
    display: { type: GraphQLString, description: 'Text to display to the user' },
    display_: { type: element },
    definition: { type: GraphQLString, description: 'Formal definition' },
    definition_: { type: element },
    designation: { description: 'Additional representations for the concept', type: new GraphQLList(designation) },
    concept: {
      get type() {
        return new GraphQLList(concept);
      },
      description: 'Child Concepts (is-a/contains/categorizes)'
    }
  }
});

export default new GraphQLObjectType({
  name: 'ValueSetCodeSystem',
  description: 'An inline code system, which is part of this value set Codes must be unique Within a code system definition, all the codes SHALL be unique',
  fields: {
    _id: { type: GraphQLID },
    extension: { type: new GraphQLList(extension) },
    ...uri({ name: 'system', description: 'URI to identify the code system (e.g. in Coding.system)' }),
    version: { type: GraphQLString, description: 'If code comparison is case sensitive' },
    version_: { type: element },
    caseSensitive: { type: GraphQLBoolean, description: 'If code comparison is case sensitive' },
    caseSensitive_: { type: element },
    concept: { type: new GraphQLList(concept), description: 'Concepts in the code system' }
  }
});
