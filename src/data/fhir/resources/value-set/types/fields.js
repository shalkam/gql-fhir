import { GraphQLString, GraphQLList } from 'graphql';

import extension from '../../../types/base/extension.js';
import extensionInput from '../../../types/base/extension-input.js';
import identifier from '../../../types/complex/identifier.js';
import identifierInput from '../../../types/complex/identifier-input.js';
import meta from '../../../types/complex/meta.js';
import metaInput from '../../../types/complex/meta-input.js';
import narrative from '../../../types/complex/narrative.js';
import narrativeInput from '../../../types/complex/narrative-input.js';
import codeableConcept from '../../../types/complex/codeable-concept.js';
import codeableConceptInput from '../../../types/complex/codeable-concept-input.js';
import valueSetContact from '../../../types/backbone/value-set/contact.js';
import valueSetContactInput from '../../../types/backbone/value-set/contact-input.js';
import valueSetCodeSystem from '../../../types/backbone/value-set/code-system.js';
import valueSetCodeSystemInput from '../../../types/backbone/value-set/code-system-input.js';
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
    ...uri({ name: 'url', description: 'Globally unique logical identifier for value set', input }),
    identifier: {
      type: input ? new GraphQLList(identifierInput) : new GraphQLList(identifier),
      description: 'Additional identifier for the value set (e.g. HL7 v2 / CDA)'
    },
    ...string({
      name: 'version',
      description: 'Logical identifier for this version of the value set',
      input
    }),
    ...string({ name: 'name', description: 'Informal name for this value set', input }),
    ...code({
      name: 'status',
      description: 'draft | active | retired ConformanceResourceStatus (Required)',
      input,
      required: true
    }),
    ...boolean({
      name: 'experimental',
      description: `If for testing purposes, not real usage`,
      input
    }),
    ...string({
      name: 'publisher',
      description: 'Name of the publisher (organization or individual)',
      input
    }),
    contact: {
      type: input ? new GraphQLList(valueSetContactInput) : new GraphQLList(valueSetContact),
      description: 'Contact details of the publisher'
    },
    ...date({ name: 'date', description: 'Date for given status', input }),
    ...date({
      name: 'lockedDate',
      description: 'Fixed date for all referenced code systems and value sets',
      input
    }),
    ...string({
      name: 'description',
      description: 'Human language description of the value set',
      input
    }),
    useContext: {
      type: input ? new GraphQLList(codeableConceptInput) : new GraphQLList(codeableConcept),
      description: 'Content intends to support these contexts Context of Use ValueSet (Extensible)'
    },
    ...boolean({
      name: 'immutable',
      description: 'Indicates whether or not any change to the content logical definition may occur',
      input
    }),
    ...string({ name: 'requirements', description: 'Why needed', input }),
    ...string({ name: 'copyright', description: 'Use and/or publishing restrictions', input }),
    ...boolean({
      name: 'extensible',
      description: 'Whether this is intended to be used with an extensible binding',
      input
    }),
    codeSystem: {
      type: input ? valueSetCodeSystemInput : valueSetCodeSystem,
      description: 'An inline code system, which is part of this value setCodes must be unique Within a code system definition, all the codes SHALL be unique'
    }
  };
  return fields;
};
