import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import codeableConceptInput from '../../../../types/complex/codeable-concept-input.js';
import reference from '../../../../types/complex/reference-input.js';
import periodInput from '../../../../types/complex/period-input.js';
import extensionInput from '../../../../types/base/extension-input.js';

export default new GraphQLInputObjectType({
  name: 'PractitionerRoleInput',
  description: 'Roles/organizations the practitioner is associated with',
  fields: {
    modifierExtension: { type: new GraphQLList(extensionInput) },
    managingOrganization: {
      type: reference,
      description: 'Organization where the roles are performed'
    },
    role: {
      type: codeableConceptInput,
      description: 'Roles which this practitioner may perform PractitionerRole (Example)'
    },
    specialty: {
      type: codeableConceptInput,
      description: 'Specific specialty of the practitioner PractitionerSpecialty (Example)'
    },
    period: {
      type: periodInput,
      description: 'The period during which the practitioner is authorized to perform in these role(s)'
    },
    location: {
      type: new GraphQLList(reference),
      description: 'The location(s) at which this practitioner provides care'
    },
    healthcareService: {
      type: new GraphQLList(reference),
      description: "The list of healthcare services that this worker provides for this role's Organization/Location(s)"
    }
  }
});
