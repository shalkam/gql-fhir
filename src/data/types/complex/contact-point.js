import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import ContactPointSystem from '../enums/contact-point-system.js'
import ContactPointUse from '../enums/contact-point-use.js'
import ElementInterface from '../base/element-interface.js'
import Element from '../base/element.js';
import Extension from '../base/extension.js';
import Period from './period.js';
import positiveInt from '../primitive/positive-integer.js'

export default new GraphQLObjectType({
  name: 'ContactPoint',
  description: 'Name of a human - parts and usage',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)},
    system: {
      type: ContactPointSystem,
      description: 'phone | fax | email | pager | other'
    },
    value: {
      type: GraphQLString,
      description: 'The actual contact point details'
    },
    value_: {
      type: Element
    },
    use: {
      type: ContactPointUse,
      description: 'home | work | temp | old | mobile - purpose of this contact point'
    },
    use_: {
      type: Element
    },
    rank: {
      type: positiveInt,
      description: 'Specify preferred order of use (1 = highest)'
    },
    rank_: {
      type: Element
    },
    period: {
      type: Period,
      description: 'Time period when the contact point was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
