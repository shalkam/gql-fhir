import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import periodInput from './period-input.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLInputObjectType({
  name: 'HumanNameInput',
  description: 'Name of a human - parts and usage',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...code({
      name: 'use',
      description: 'usual | official | temp | nickname | anonymous | old | maiden',
      input: true
    }),
    ...string({ name: 'text', description: 'Text representation of the full name', input: true }),
    ...string({
      name: 'family',
      description: 'Text representation of the full name',
      input: true,
      multiple: true
    }),
    ...string({
      name: 'given',
      description: "Given names (not always 'first'). Includes middle names)",
      input: true,
      multiple: true
    }),
    ...string({
      name: 'prefix',
      description: 'Parts that come before the name',
      input: true,
      multiple: true
    }),
    ...string({
      name: 'suffix',
      description: 'Parts that come after the name',
      input: true,
      multiple: true
    }),
    period: { type: periodInput, description: 'Time period when name was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
