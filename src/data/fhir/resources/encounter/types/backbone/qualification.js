import { GraphQLObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import identifier from '../../../../types/complex/identifier.js';
import codeableConcept from '../../../../types/complex/codeable-concept.js';
import reference from '../../../../types/complex/reference.js';
import period from '../../../../types/complex/period.js';
import extension from '../../../../types/base/extension.js';

export default new GraphQLObjectType({
  name: 'Qualification',
  description: 'Roles/organizations the practitioner is associated with',
  fields: {
    modifierExtension: { type: new GraphQLList(extension) },
    identifier: {
      type: new GraphQLList(identifier),
      description: '	An identifier for this qualification for the practitioner'
    },
    code: {
      type: new GraphQLNonNull(codeableConcept),
      description: 'Coded representation of the qualification ANZSCO -- Australian and New Zealand Standard Classification of Occupations, 2013, Version 1.2 (Example)'
    },
    period: {
      type: period,
      description: 'The period during which the practitioner is authorized to perform in these role(s)'
    },
    issuer: {
      type: reference,
      description: 'Organization that regulates and issues the qualification'
    }
  }
});
