import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import AddressUse from '../enums/address-use.js';
import AddressType from '../enums/address-type.js';
import ElementInterface from '../base/element-interface.js'
import Extension from '../base/extension.js';
import Element from '../base/element.js';
import Period from './period.js';

export default new GraphQLObjectType({
  name: 'Address',
  description: 'A postal address',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: { type: new GraphQLList(Extension)},
    use: {
      type: AddressUse,
      description: 'home | work | temp | old - purpose of this address'
    },
    use_: {
      type: Element
    },
    type: {
      type: AddressType,
      description: 'postal | physical | both'
    },
    type_: {
      type: Element
    },
    text: {
      type: GraphQLString,
      description: 'Text representation of the address'
    },
    text_: {
      type: Element
    },
    line: {
      type: new GraphQLList(GraphQLString),
      description: 'Street name, number, direction & P.O. Box etc.'
    },
    line_: {
      type: Element
    },
    city: {
      type: GraphQLString,
      description: 'Name of city, town etc.'
    },
    city_: {
      type: Element
    },
    district: {
      type: GraphQLString,
      description: 'District name (aka county)'
    },
    district_: {
      type: Element
    },
    state: {
      type: GraphQLString,
      description: 'Sub-unit of country (abbreviations ok)'
    },
    state_: {
      type: Element
    },
    postalCode: {
      type: GraphQLString,
      description: 'Postal code for area'
    },
    postalCode_: {
      type: Element
    },
    country: {
      type: GraphQLString,
      description: 'Country (can be ISO 3166 3 letter code)'
    },
    country_: {
      type: Element
    },
    period: {
      type: Period,
      description: 'Time period when address was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
