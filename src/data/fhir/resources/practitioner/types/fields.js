import { GraphQLString, GraphQLList } from 'graphql';

import extension from '../../../types/base/extension.js';
import extensionInput from '../../../types/base/extension-input.js';
import identifier from '../../../types/complex/identifier.js';
import identifierInput from '../../../types/complex/identifier-input.js';
import humanName from '../../../types/complex/human-name.js';
import humanNameInput from '../../../types/complex/human-name-input.js';
import contactPoint from '../../../types/complex/contact-point.js';
import contactPointInput from '../../../types/complex/contact-point-input.js';
import address from '../../../types/complex/address.js';
import addressInput from '../../../types/complex/address-input.js';
import meta from '../../../types/complex/meta.js';
import metaInput from '../../../types/complex/meta-input.js';
import narrative from '../../../types/complex/narrative.js';
import narrativeInput from '../../../types/complex/narrative-input.js';
import codeableConcept from '../../../types/complex/codeable-concept.js';
import codeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import practitionerRole from './backbone/practitioner-role.js';
import practitionerRoleInput from './backbone/practitioner-role-input.js';
import qualification from './backbone/qualification.js';
import qualificationInput from './backbone/qualification-input.js';
import date from '../../../types/primitive/date.js';
import uri from '../../../types/primitive/uri.js';
import code from '../../../types/primitive/code.js';
import boolean from '../../../types/primitive/boolean.js';
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
      description: 'A identifier for the person as this agent'
    },
    ...boolean({
      name: 'active',
      description: "Whether this practitioner's record is in active use",
      input
    }),
    name: {
      type: input ? new GraphQLList(humanNameInput) : new GraphQLList(humanName),
      description: 'A name associated with the person'
    },
    telecom: {
      type: input ? new GraphQLList(contactPointInput) : new GraphQLList(contactPoint),
      description: 'A contact detail for the practitioner'
    },
    address: {
      type: input ? new GraphQLList(addressInput) : new GraphQLList(address),
      description: 'Where practitioner can be found/visited'
    },
    ...code({
      name: 'gender',
      description: 'male | female | other | unknown AdministrativeGender (Required)',
      input
    }),
    ...date({
      name: 'brithDate',
      description: 'The date on which the practitioner was born',
      input
    }),
    practitionerRole: {
      type: input ? new GraphQLList(practitionerRoleInput) : new GraphQLList(practitionerRole),
      description: 'Roles/organizations the practitioner is associated with'
    },
    qualification: {
      type: input ? new GraphQLList(qualificationInput) : new GraphQLList(qualification),
      description: 'Qualifications obtained by training and certification'
    },
    communication: {
      type: input ? new GraphQLList(codeableConceptInput) : new GraphQLList(codeableConcept),
      description: 'A language the practitioner is able to use in patient communication Language (Required)'
    }
  };
  return fields;
};
