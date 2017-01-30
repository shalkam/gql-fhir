import { GraphQLString, GraphQLList } from 'graphql';

import codeableConcept from '../../../types/complex/codeable-concept.js';
import codeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import extension from '../../../types/base/extension.js';
import extensionInput from '../../../types/base/extension-input.js';
import identifier from '../../../types/complex/identifier.js';
import identifierInput from '../../../types/complex/identifier-input.js';
import meta from '../../../types/complex/meta.js';
import metaInput from '../../../types/complex/meta-input.js';
import narrative from '../../../types/complex/narrative.js';
import narrativeInput from '../../../types/complex/narrative-input.js';
import reference from '../../../types/complex/reference.js';
import referenceInput from '../../../types/complex/reference-input.js';
import statusHistory from './backbone/status-history.js';
import statusHistoryInput from './backbone/status-history-input.js';
import code from '../../../types/primitive/code.js';
import string from '../../../types/primitive/string.js';
import id from '../../../types/primitive/id.js';

import humanName from '../../../types/complex/human-name.js';
import humanNameInput from '../../../types/complex/human-name-input.js';
import contactPoint from '../../../types/complex/contact-point.js';
import contactPointInput from '../../../types/complex/contact-point-input.js';
import address from '../../../types/complex/address.js';
import addressInput from '../../../types/complex/address-input.js';
import practitionerRole from './backbone/practitioner-role.js';
import practitionerRoleInput from './backbone/practitioner-role-input.js';
import qualification from './backbone/qualification.js';
import qualificationInput from './backbone/qualification-input.js';
import date from '../../../types/primitive/date.js';
import uri from '../../../types/primitive/uri.js';
import boolean from '../../../types/primitive/boolean.js';

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
      description: 'Identifier(s) by which this encounter is known'
    },
    ...code({
      name: 'status',
      description: 'planned | arrived | in-progress | onleave | finished | cancelled EncounterState (Required)',
      input
    }),
    statusHistory: {
      type: input ? new GraphQLList(statusHistoryInput) : new GraphQLList(statusHistory),
      description: 'List of past encounter statuses'
    },
    ...code({
      name: 'class',
      description: 'inpatient | outpatient | ambulatory | emergency + EncounterClass (Required)',
      input
    }),
    type: {
      type: input ? new GraphQLList(codeableConceptInput) : new GraphQLList(codeableConcept),
      description: 'Specific type of encounter EncounterType (Example)'
    },
    priority: {
      type: input ? codeableConceptInput : codeableConcept,
      description: 'Indicates the urgency of the encounter Encounter Priority (Example)'
    },
    patient: {
      type: input ? referenceInput : reference,
      description: 'The patient present at the encounter'
    },
    episodeOfCare: {
      type: input ? new GraphQLList(referenceInput) : new GraphQLList(reference),
      description: 'Episode(s) of care that this encounter should be recorded against'
    },
    incommingReferral: {
      type: input ? new GraphQLList(referenceInput) : new GraphQLList(reference),
      description: 'The ReferralRequest that initiated this encounter'
    }
  };
  return fields;
};
