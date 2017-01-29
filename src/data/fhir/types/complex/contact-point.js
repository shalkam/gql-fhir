import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import period from './period.js';
import positiveInt from '../primitive/positive-integer.js';
import date from '../primitive/date.js';
import uri from '../primitive/uri.js';
import code from '../primitive/code.js';
import boolean from '../primitive/boolean.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';

export default new GraphQLObjectType({
  name: 'ContactPoint',
  description: 'Name of a human - parts and usage',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...code({ name: 'system', description: 'phone | fax | email | pager | other' }),
    ...string({ name: 'value', description: 'The actual contact point details' }),
    ...code({
      name: 'use',
      description: 'home | work | temp | old | mobile - purpose of this contact point'
    }),
    ...positiveInt({ name: 'rank', description: 'Specify preferred order of use (1 = highest)' }),
    period: { type: period, description: 'Time period when the contact point was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
