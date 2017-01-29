import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import period from './period.js';
import id from '../primitive/id.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';

export default new GraphQLObjectType({
  name: 'Address',
  description: 'A postal address',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...code({ name: 'use', description: 'home | work | temp | old - purpose of this address' }),
    ...code({ name: 'use', description: 'postal | physical | both' }),
    ...string({ name: 'text', description: 'Text representation of the address' }),
    ...string({
      name: 'line',
      description: 'Street name, number, direction & P.O. Box etc.',
      multiple: true
    }),
    ...string({ name: 'city', description: 'Name of city, town etc.' }),
    ...string({ name: 'district', description: 'District name (aka county)' }),
    ...string({ name: 'state', description: 'Sub-unit of country (abbreviations ok)' }),
    ...string({ name: 'postalCode', description: 'Postal code for area' }),
    ...string({ name: 'country', description: 'Country (can be ISO 3166 3 letter code)' }),
    period: { type: period, description: 'Time period when address was/is in use' }
  },
  isTypeOf: value => {
    return true;
  }
});
