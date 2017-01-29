import { GraphQLObjectType, GraphQLList } from 'graphql';
import codeableConcept from '../../../../types/complex/codeable-concept.js';
import reference from '../../../../types/complex/reference.js';
import period from '../../../../types/complex/period.js';
import extension from '../../../../types/base/extension.js';

export default new GraphQLObjectType({
  name: 'PractitionerRole',
  description: 'Roles/organizations the practitioner is associated with',
  fields: {
    modifierExtension: { type: new GraphQLList(extension) },
    managingOrganization: {
      type: reference,
      description: 'Organization where the roles are performed'
    },
    role: {
      type: codeableConcept,
      description: 'Roles which this practitioner may perform PractitionerRole (Example)'
    },
    specialty: {
      type: codeableConcept,
      description: 'Specific specialty of the practitioner PractitionerSpecialty (Example)'
    },
    period: {
      type: period,
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
