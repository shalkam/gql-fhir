import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import AddressUse from '../enums/address-use.js';
import AddressType from '../enums/address-type.js';
import ElementInterfaceInput from '../base/element-interface-input.js'
import ExtensionInput from '../base/extension-input.js';
import ElementInput from '../base/element-input.js';
import PeriodInput from './period-input.js';

export default new GraphQLInputObjectType({
  name: 'AddressInput',
  description: 'A postal address',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: { type: new GraphQLList(ExtensionInput)},
    use: {
      type: AddressUse,
      description: 'home | work | temp | old - purpose of this address'
    },
    use_: {
      type: ElementInput
    },
    type: {
      type: AddressType,
      description: 'postal | physical | both'
    },
    type_: {
      type: ElementInput
    },
    text: {
      type: GraphQLString,
      description: 'Text representation of the address'
    },
    text_: {
      type: ElementInput
    },
    line: {
      type: new GraphQLList(GraphQLString),
      description: 'Street name, number, direction & P.O. Box etc.'
    },
    line_: {
      type: ElementInput
    },
    city: {
      type: GraphQLString,
      description: 'Name of city, town etc.'
    },
    city_: {
      type: ElementInput
    },
    district: {
      type: GraphQLString,
      description: 'District name (aka county)'
    },
    district_: {
      type: ElementInput
    },
    state: {
      type: GraphQLString,
      description: 'Sub-unit of country (abbreviations ok)'
    },
    state_: {
      type: ElementInput
    },
    postalCode: {
      type: GraphQLString,
      description: 'Postal code for area'
    },
    postalCode_: {
      type: ElementInput
    },
    country: {
      type: GraphQLString,
      description: 'Country (can be ISO 3166 3 letter code)'
    },
    country_: {
      type: ElementInput
    },
    period: {
      type: PeriodInput,
      description: 'Time period when address was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
