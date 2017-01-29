import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import periodInput from './period-input.js';
import positiveInt from '../primitive/positive-integer.js';
import date from '../primitive/date.js';
import uri from '../primitive/uri.js';
import code from '../primitive/code.js';
import boolean from '../primitive/boolean.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';

export default new GraphQLInputObjectType({
  name: 'ContactPointInput',
  description: 'Name of a human - parts and usage',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...code({ name: 'system', description: 'phone | fax | email | pager | other', input: true }),
    ...string({ name: 'value', description: 'The actual contact point details', input: true }),
    ...code({
      name: 'use',
      description: 'home | work | temp | old | mobile - purpose of this contact point',
      input: true
    }),
    ...positiveInt({
      name: 'rank',
      description: 'Specify preferred order of use (1 = highest)',
      input: true
    }),
    period: { type: periodInput, description: 'Time period when the contact point was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
