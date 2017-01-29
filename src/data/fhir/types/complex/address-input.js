import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import periodInput from './period-input.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLInputObjectType({
  name: 'AddressInput',
  description: 'A postal address',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...code({
      name: 'use',
      description: 'home | work | temp | old - purpose of this address',
      input: true
    }),
    ...code({ name: 'use', description: 'postal | physical | both', input: true }),
    ...string({ name: 'text', description: 'Text representation of the address', input: true }),
    ...string({
      name: 'line',
      description: 'Street name, number, direction & P.O. Box etc.',
      input: true,
      multiple: true
    }),
    ...string({ name: 'city', description: 'Name of city, town etc.', input: true }),
    ...string({ name: 'district', description: 'District name (aka county)', input: true }),
    ...string({
      name: 'state',
      description: 'Sub-unit of country (abbreviations ok)',
      input: true
    }),
    ...string({ name: 'postalCode', description: 'Postal code for area', input: true }),
    ...string({
      name: 'country',
      description: 'Country (can be ISO 3166 3 letter code)',
      input: true
    }),
    period: { type: periodInput, description: 'Time period when address was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
