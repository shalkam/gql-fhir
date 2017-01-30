import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import identifier from '../../../../types/complex/identifier-input.js';
import codeableConceptInput from '../../../../types/complex/codeable-concept-input.js';
import reference from '../../../../types/complex/reference-input.js';
import periodInput from '../../../../types/complex/period-input.js';
import extensionInput from '../../../../types/base/extension-input.js';

export default new GraphQLInputObjectType({
  name: 'QualificationInput',
  description: 'Roles/organizations the practitioner is associated with',
  fields: {
    modifierExtension: { type: new GraphQLList(extensionInput) },
    identifier: {
      type: new GraphQLList(identifier),
      description: '	An identifier for this qualification for the practitioner'
    },
    code: {
      type: new GraphQLNonNull(codeableConceptInput),
      description: 'Coded representation of the qualification ANZSCO -- Australian and New Zealand Standard Classification of Occupations, 2013, Version 1.2 (Example)'
    },
    period: {
      type: periodInput,
      description: 'The period during which the practitioner is authorized to perform in these role(s)'
    },
    issuer: {
      type: reference,
      description: 'Organization that regulates and issues the qualification'
    }
  }
});
