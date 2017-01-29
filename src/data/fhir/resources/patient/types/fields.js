import { GraphQLString, GraphQLList } from 'graphql';

import identifier from '../../../types/complex/identifier.js';
import identifierInput from '../../../types/complex/identifier-input.js';
import humanName from '../../../types/complex/human-name.js';
import humanNameInput from '../../../types/complex/human-name-input.js';
import contactPoint from '../../../types/complex/contact-point.js';
import contactPointInput from '../../../types/complex/contact-point-input.js';
import codeableConcept from '../../../types/complex/codeable-concept.js';
import codeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import address from '../../../types/complex//address.js';
import addressInput from '../../../types/complex/address-input.js';
import administrativeGender from '../../../types/enums/administrative-gender.js';
import patientContact from '../../../types/backbone/patient/contact.js';
import patientContactInput from '../../../types/backbone/patient/contact-input.js';
import communication from '../../../types/backbone/patient/communication.js';
import communicationInput from '../../../types/backbone/patient/communication-input.js';
import reference from '../../../types/complex/reference.js';
import referenceInput from '../../../types/complex/reference-input.js';
import narrative from '../../../types/complex/narrative.js';
import narrativeInput from '../../../types/complex/narrative-input.js';
import extension from '../../../types/base/extension.js';
import extensionInput from '../../../types/base/extension-input.js';
import date from '../../../types/primitive/date.js';
import dateTime from '../../../types/primitive/date-time.js';
import uri from '../../../types/primitive/uri.js';
import code from '../../../types/primitive/code.js';
import boolean from '../../../types/primitive/boolean.js';
import string from '../../../types/primitive/string.js';
import integer from '../../../types/primitive/integer.js';
import id from '../../../types/primitive/id.js';

export default ({ input }) => {
  let fields = {
    resourceType: { type: GraphQLString },
    ...id({ name: 'id', input }),
    ...string({
      name: 'implicitRules',
      description: 'A set of rules under which this content was created',
      input
    }),
    ...string({
      name: 'language',
      description: 'Language of the resource content Language (Required)',
      input
    }),
    text: {
      type: input ? narrativeInput : narrative,
      description: 'Text summary of the resource, for human interpretation'
    },
    extension: {
      type: input ? new GraphQLList(extensionInput) : new GraphQLList(extension),
      description: 'Additional Content defined by implementations',
      input
    },
    modifierExtension: {
      type: input ? new GraphQLList(extensionInput) : new GraphQLList(extension),
      description: 'Extensions that cannot be ignored',
      input
    },
    identifier: {
      type: input ? new GraphQLList(identifierInput) : new GraphQLList(identifier),
      description: 'An identifier for this patient'
    },
    ...boolean({
      name: 'active',
      description: "Whether this patient's record is in active use",
      input
    }),
    name: {
      type: input ? new GraphQLList(humanNameInput) : new GraphQLList(humanName),
      description: 'A name associated with the patient'
    },
    telecom: {
      type: input ? new GraphQLList(contactPointInput) : new GraphQLList(contactPoint),
      description: 'A contact detail for the individual'
    },
    ...code({ name: 'gender', description: 'male | female | other | unknown', input }),
    ...date({ name: 'birthDate', description: 'The date of birth for the individual', input }),
    ...boolean({
      name: 'deceasedBoolean',
      description: 'Indicates if the individual is deceased or not',
      input
    }),
    ...dateTime({
      name: 'deceasedDateTime',
      description: 'Date and time if individual is deceased',
      input
    }),
    address: {
      type: input ? new GraphQLList(addressInput) : new GraphQLList(address),
      description: 'Addresses for the individual'
    },
    mariatalStatus: {
      type: input ? codeableConceptInput : codeableConcept,
      description: 'Marital (civil) status of a patient'
    },
    ...boolean({
      name: 'multipleBirthBoolean',
      description: 'Whether patient is part of a multiple birth',
      input
    }),
    ...integer({
      name: 'multipleBirthInteger',
      description: 'Whether patient is part of a multiple birth',
      input
    }),
    contact: {
      type: input ? new GraphQLList(patientContactInput) : new GraphQLList(patientContact),
      description: 'A contact party (e.g. guardian, partner, friend) for the patient'
    },
    communication: {
      type: input ? new GraphQLList(communicationInput) : new GraphQLList(communication),
      description: 'A list of Languages which may be used to communicate with the patient about his or her health'
    },
    careProvider: {
      type: input ? referenceInput : reference,
      description: "Patient's nominated primary care provider (Organization | Practitioner)"
    },
    managingOrganization: {
      type: input ? referenceInput : reference,
      description: 'Organization that is the custodian of the patient record'
    }
  };
  return fields;
};
