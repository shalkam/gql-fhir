import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLID } from 'graphql';
import CodeableConcept from '../../complex/codeable-concept.js';
import HumanName from '../../complex/human-name.js';
import ContactPoint from '../../complex/contact-point.js';
import Address from '../../complex/address.js';
import AdministrativeGender from '../../enums/administrative-gender.js';
import Period from '../../complex/period.js';
import Element from '../../base/element.js';
import code from '../../primitive/code.js';

export default new GraphQLObjectType({
  name: 'PatientContact',
  description: 'A contact party (e.g. guardian, partner, friend) for the patient',
  fields: {
    relationship: {
      type: new GraphQLList(CodeableConcept),
      description: 'The kind of relationship'
    },
    name: { type: HumanName, description: 'A name associated with the contact person' },
    telecom: {
      type: new GraphQLList(ContactPoint),
      description: 'A contact detail for the person'
    },
    address: { type: Address, description: 'Address for the contact person' },
    ...code({ name: 'gender', description: 'male | female | other | unknown' }),
    organization: {
      type: GraphQLID,
      description: 'Organization that is associated with the contact'
    },
    period: {
      type: Period,
      description: 'The period during which this contact person or organization is valid to be contacted relating to this patient'
    }
  }
});
