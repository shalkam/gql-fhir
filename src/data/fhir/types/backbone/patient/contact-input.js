import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql';
import codeableConceptInput from '../../complex/codeable-concept-input.js';
import humanNameInput from '../../complex/human-name-input.js';
import contactPointInput from '../../complex/contact-point-input.js';
import addressInput from '../../complex/address-input.js';
import periodInput from '../../complex/period-input.js';
import code from '../../primitive/code.js';

export default new GraphQLInputObjectType({
  name: 'PatientContactInput',
  description: 'A contact party (e.g. guardian, partner, friend) for the patient',
  fields: {
    relationship: {
      type: new GraphQLList(codeableConceptInput),
      description: 'The kind of relationship'
    },
    name: { type: humanNameInput, description: 'A name associated with the contact person' },
    telecom: {
      type: new GraphQLList(contactPointInput),
      description: 'A contact detail for the person'
    },
    address: { type: addressInput, description: 'Address for the contact person' },
    ...code({ name: 'gender', description: 'male | female | other | unknown', input: true }),
    organization: {
      type: GraphQLID,
      description: 'Organization that is associated with the contact'
    },
    period: {
      type: periodInput,
      description: 'The period during which this contact person or organization is valid to be contacted relating to this patient'
    }
  }
});
