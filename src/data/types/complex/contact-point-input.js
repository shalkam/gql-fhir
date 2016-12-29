import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import ContactPointSystem from '../enums/contact-point-system.js'
import ContactPointUse from '../enums/contact-point-use.js'
import ElementInterfaceInput from '../base/element-interface-input.js'
import ElementInput from '../base/element-input.js';
import ExtensionInput from '../base/extension-input.js';
import PeriodInput from './period-input.js';
import positiveInt from '../primitive/positive-integer.js'

export default new GraphQLInputObjectType({
  name: 'ContactPointInput',
  description: 'Name of a human - parts and usage',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)},
    system: {
      type: ContactPointSystem,
      description: 'phone | fax | email | pager | other'
    },
    value: {
      type: GraphQLString,
      description: 'The actual contact point details'
    },
    value_: {
      type: ElementInput
    },
    use: {
      type: ContactPointUse,
      description: 'home | work | temp | old | mobile - purpose of this contact point'
    },
    use_: {
      type: ElementInput
    },
    rank: {
      type: positiveInt,
      description: 'Specify preferred order of use (1 = highest)'
    },
    rank_: {
      type: ElementInput
    },
    period: {
      type: PeriodInput,
      description: 'Time period when the contact point was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
