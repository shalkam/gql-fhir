import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import {
  GraphQLDateTime
} from 'graphql-custom-types';

import Element from '../../../types/base/element.js';
import ElementInput from '../../../types/base/element-input.js';
import Identifier from '../../../types/complex/identifier.js';
import IdentifierInput from '../../../types/complex/identifier-input.js';
import HumanName from '../../../types/complex/human-name.js';
import HumanNameInput from '../../../types/complex/human-name-input.js';
import ContactPoint from '../../../types/complex/contact-point.js';
import ContactPointInput from '../../../types/complex/contact-point-input.js';
import CodeableConcept from '../../../types/complex/codeable-concept.js';
import CodeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import Address from '../../../types/complex//address.js';
import AddressInput from '../../../types/complex/address-input.js';
import AdministrativeGender from '../../../types/enums/administrative-gender.js';
import date from '../../../types/primitive/date.js';
import PatientContact from '../../../types/backbone/patient/contact.js';
import PatientContactInput from '../../../types/backbone/patient/contact-input.js';
import Communication from '../../../types/backbone/patient/communication.js'
import CommunicationInput from '../../../types/backbone/patient/communication-input.js'
import Reference from '../../../types/complex/reference.js';
import ReferenceInput from '../../../types/complex/reference-input.js';

export default (input) => {
  let fields = {
    _id: {type: GraphQLString},
    implicitRules: {type: GraphQLString},
    language: {type: GraphQLString},
    text: {type: GraphQLString},
    identifier: {
      type: new GraphQLList(Identifier),
      description: 'An identifier for this patient'
    },
    active: {
      type: GraphQLBoolean,
      description: 'Whether this patient\'s record is in active use'
    },
    active_: {type: Element},
    name : {
      type: new GraphQLList(HumanName),
      description: 'A name associated with the patient'
    },
    telecom : {
      type: new GraphQLList(ContactPoint),
      description: 'A contact detail for the individual'
    },
    gender: {
      type: AdministrativeGender,
      description: 'male | female | other | unknown'
    },
    gender_: {type: Element},
    birthDate: {
      type: date,
      description: 'The date of birth for the individual'
    },
    birthDate_: { type: Element},
    deceasedBoolean: {
      type: GraphQLBoolean,
      description: 'Indicates if the individual is deceased or not'
    },
    deceasedBoolean_:{type: Element},
    deceasedDateTime: {
      type: GraphQLDateTime,
      description: 'Date and time if individual is deceased'
    },
    deceasedDateTime_:{type: Element},
    address: {
      type: new GraphQLList(Address),
      description: 'Addresses for the individual'
    },
    mariatalStatus: {
      type: CodeableConcept,
      description: 'Marital (civil) status of a patient'
    },
    multipleBirthBoolean: {
      type: GraphQLBoolean,
      description: 'Whether patient is part of a multiple birth'
    },
    multipleBirthBoolean_: {type: Element},
    multipleBirthInteger: {
      type: GraphQLInt,
      description: 'Whether patient is part of a multiple birth'
    },
    multipleBirthInteger_: {type: Element},
    contact: {
      type: new GraphQLList(PatientContact),
      description: 'A contact party (e.g. guardian, partner, friend) for the patient'
    },
    communication: {
      type: new GraphQLList(Communication),
      description: '	A list of Languages which may be used to communicate with the patient about his or her health'
    },
    careProvider: {
      type: Reference,
      description: 'Patient\'s nominated primary care provider (Organization | Practitioner)'
    },
    managingOrganization: {
      type: Reference,
      description: 'Organization that is the custodian of the patient record'
    },

  }
  if(input) {
    fields.identifier.type = new GraphQLList(IdentifierInput);
    fields.name.type = new GraphQLList(HumanNameInput);
    fields.telecom.type = new GraphQLList(ContactPointInput);
    fields.address.type = new GraphQLList(AddressInput);
    fields.mariatalStatus.type = CodeableConceptInput;
    fields.contact.type = new GraphQLList(PatientContactInput);
    fields.communication.type = new GraphQLList(CommunicationInput);
    fields.careProvider.type = ReferenceInput;
    fields.managingOrganization.type = ReferenceInput;
    fields.active_.type =
    fields.birthDate_.type =
    fields.deceasedBoolean_.type =
    fields.deceasedDateTime_.type =
    fields.multipleBirthInteger_.type =
    fields.multipleBirthBoolean_.type =
    fields.gender_.type = ElementInput;
  }
  return fields;
}
