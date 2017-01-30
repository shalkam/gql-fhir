import { GraphQLString, GraphQLList } from 'graphql';

import address from '../../../types/complex/address.js';
import addressInput from '../../../types/complex/address-input.js';
import codeableConcept from '../../../types/complex/codeable-concept.js';
import codeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import contactPoint from '../../../types/complex/contact-point.js';
import contactPointInput from '../../../types/complex/contact-point-input.js';
import extension from '../../../types/base/extension.js';
import extensionInput from '../../../types/base/extension-input.js';
import humanName from '../../../types/complex/human-name.js';
import humanNameInput from '../../../types/complex/human-name-input.js';
import identifier from '../../../types/complex/identifier.js';
import identifierInput from '../../../types/complex/identifier-input.js';
import meta from '../../../types/complex/meta.js';
import metaInput from '../../../types/complex/meta-input.js';
import narrative from '../../../types/complex/narrative.js';
import narrativeInput from '../../../types/complex/narrative-input.js';
import period from '../../../types/complex/period.js';
import periodInput from '../../../types/complex/period-input.js';
import reference from '../../../types/complex/reference.js';
import referenceInput from '../../../types/complex/reference-input.js';

import date from '../../../types/primitive/date.js';
import code from '../../../types/primitive/code.js';
import string from '../../../types/primitive/string.js';
import id from '../../../types/primitive/id.js';

export default ({ input }) => {
  let fields = {
    resourceType: { type: GraphQLString },
    ...id({ name: 'id', input }),
    meta: {
      type: input ? metaInput : meta,
      description: 'Text summary of the resource, for human interpretation'
    },
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
      description: 'A human identifier for this person'
    },
    patient: {
      type: input ? referenceInput : reference,
      description: 'The patient this person is related to'
    },
    relationship: {
      type: input ? new GraphQLList(codeableConceptInput) : new GraphQLList(codeableConcept),
      description: 'The nature of the relationship PatientRelationshipType (Required)'
    },
    name: {
      type: input ? new GraphQLList(humanNameInput) : new GraphQLList(humanName),
      description: 'A name associated with the person'
    },
    telecom: {
      type: input ? new GraphQLList(contactPointInput) : new GraphQLList(contactPoint),
      description: 'A contact detail for the person'
    },
    ...code({
      name: 'gender',
      description: 'male | female | other | unknown AdministrativeGender (Required)',
      input
    }),
    ...date({
      name: 'birthDate',
      description: 'The date on which the related person was born',
      input
    }),
    address: {
      type: input ? new GraphQLList(addressInput) : new GraphQLList(address),
      description: 'Address where the related person can be contacted or visited'
    },
    period: {
      type: input ? new GraphQLList(periodInput) : new GraphQLList(period),
      description: 'Period of time that this relationship is considered valid'
    }
  };
  return fields;
};
