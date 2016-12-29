import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql';
import CodeableConceptInput from '../../complex/codeable-concept-input.js';
import HumanNameInput from '../../complex/human-name-input.js';
import ContactPointInput from '../../complex/contact-point-input.js';
import AddressInput from '../../complex/address-input.js';
import AdministrativeGender from '../../enums/administrative-gender.js';
import PeriodInput from '../../complex/period-input.js';
import ElementInput from '../../base/element-input.js';

export default new GraphQLInputObjectType({
  name: 'PatientContactInput',
  description: 'A contact party (e.g. guardian, partner, friend) for the patient',
  fields: {
    relationship: {
      type: new GraphQLList(CodeableConceptInput),
      description: 'The kind of relationship'
    },
    name: {
      type: HumanNameInput,
      description: 'A name associated with the contact person'
    },
    telecom: {
      type: new GraphQLList(ContactPointInput),
      description: 'A contact detail for the person'
    },
    address: {
      type: AddressInput,
      description: 'Address for the contact person'
    },
    gender: {
      type: AdministrativeGender,
      description: 'male | female | other | unknown'
    },
    gender_: {type: ElementInput},
    organization: {
      type: GraphQLID,
      description:'Organization that is associated with the contact'
    },
    period: {
      type: PeriodInput,
      description: 'The period during which this contact person or organization is valid to be contacted relating to this patient'
    }
  }
});
