import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import integer from '../../primitive/integer.js';
import string from '../../primitive/string.js';
import boolean from '../../primitive/boolean.js';
import decimal from '../../primitive/decimal.js';
import uri from '../../primitive/uri.js';
import elementInput from '../../base/element-input.js';
import code from '../../primitive/code.js';
import dateTime from '../../primitive/dateTime.js';
import codingInput from '../../complex/coding-input.js';

const contains = new GraphQLInputObjectType({
  name: 'containsInput',
  fields: {
    system: { type: uri, description: 'System value for the code' },
    system_: { type: elementInput },
    abstract: {
      type: boolean,
      description: 'If user cannot select this entry',
    },
    abstract_: { type: elementInput },
    version: {
      type: string,
      description: 'Version in which this code/display is defined',
    },
    version_: { type: elementInput },
    code: {
      type: string,
      description: 'Code - if blank, this is not a selectable code',
    },
    code_: { type: elementInput },
    display: { type: string, description: 'User display for the concept' },
    display_: { type: elementInput },
    contains: {
      get type() {
        return new GraphQLList(contains);
      },
      description: 'Codes contained under this entry',
    },
  },
});

const parameter = new GraphQLInputObjectType({
  name: 'parameterInput',
  fields: {
    name: { type: string, description: 'Name as assigned by the server' },
    name_: { type: elementInput },
    valueString: { type: string },
    valueBoolean: { type: boolean },
    valueInteger: { type: integer },
    valueDecimal: { type: decimal },
    valueUri: { type: uri },
    valueCode: { type: code },
  },
});

const concept = new GraphQLInputObjectType({
  name: 'ValueSetCodesystemConceptInput',
  description: 'Concepts in the code system',
  fields: {
    code: { type: code, description: 'Code that identifies concept' },
    code_: { type: elementInput },
    abstract: {
      type: GraphQLBoolean,
      description: 'If this code is not for use as a real concept',
    },
    abstract_: { type: elementInput },
    display: {
      type: GraphQLString,
      description: 'Text to display to the user',
    },
    display_: { type: elementInput },
    definition: { type: GraphQLString, description: 'Formal definition' },
    definition_: { type: elementInput },
    designation: {
      description: 'Additional representations for the concept',
      type: new GraphQLList(designation),
    },
    concept: {
      get type() {
        return new GraphQLList(concept);
      },
      description: 'Child Concepts (is-a/contains/categorizes)',
    },
  },
});

export default new GraphQLInputObjectType({
  name: 'ValueSetExpansion',
  description: 'Used when the value set is "expanded"',
  fields: {
    identifier: {
      type: uri,
      description: 'Uniquely identifies this expansion',
    },
    identifier_: { type: elementInput },
    timestamp: {
      type: dateTime,
      description: 'Time ValueSet expansion happened',
    },
    timestamp_: { type: elementInput },
    total: {
      type: integer,
      description: 'Total number of codes in the expansion',
    },
    total_: { type: elementInput },
    offset: {
      type: integer,
      description: 'Offset at which this resource starts',
    },
    offset_: { type: elementInput },
    parameter: {
      type: new GraphQLList(concept),
      description: 'Parameter that controlled the expansion process',
    },
  },
});
