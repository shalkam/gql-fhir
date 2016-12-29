import {
  GraphQLInputObjectType,
  GraphQLString,
  // GraphQLBoolean,
  // GraphQLNonNull
} from 'graphql';
import CodeableConceptInput from './codeable-concept-input.js';
import IdentifierUse from '../enums/identifier-use.js';
import uri from '../primitive/uri.js';
import PeriodInput from './period-input.js';

export default new GraphQLInputObjectType({
  name: 'IdentifierInput',
  description: 'An identifier intended for computation',
  fields: {
    use: {
      type: IdentifierUse,
      description: 'usual | official | temp | secondary (If known)'
    },
    type: {
      type: CodeableConceptInput,
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
      type: PeriodInput,
      description: 'Time period when id is/was valid for use'
    }
  }
});
