import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import period from './period.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLObjectType({
  name: 'HumanName',
  description: 'Name of a human - parts and usage',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...code({
      name: 'use',
      description: 'usual | official | temp | nickname | anonymous | old | maiden'
    }),
    ...string({ name: 'text', description: 'Text representation of the full name' }),
    ...string({
      name: 'family',
      description: 'Text representation of the full name',
      multiple: true
    }),
    ...string({
      name: 'given',
      description: "Given names (not always 'first'). Includes middle names)",
      multiple: true
    }),
    ...string({ name: 'prefix', description: 'Parts that come before the name', multiple: true }),
    ...string({ name: 'suffix', description: 'Parts that come after the name', multiple: true }),
    period: { type: period, description: 'Time period when name was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
