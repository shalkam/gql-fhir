import {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLBoolean,
  // GraphQLNonNull
} from 'graphql';
import CodeableConcept from './codeable-concept.js';
import IdentifierUse from '../enums/identifier-use.js';
import uri from '../primitive/uri.js';
import Period from './period.js';

export default new GraphQLObjectType({
  name: 'Identifier',
  description: 'An identifier intended for computation',
  fields: {
    use: {
      type: IdentifierUse,
      description: 'usual | official | temp | secondary (If known)'
    },
    type: {
      type: CodeableConcept,
      description: 'Description of identifier'
    },
    value: {
      type: GraphQLString,
      description: 'The value that is unique'
    },
    system: {
      type: uri,
      description: 'The namespace for the identifier'
    },
    period: {
      type: Period,
      description: 'Time period when id is/was valid for use'
    }
  }
});
