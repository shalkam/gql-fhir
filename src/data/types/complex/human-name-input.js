import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import NameUse from '../enums/name-use.js'
import ElementInterfaceInput from '../base/element-interface-input.js'
import ElementInput from '../base/element-input.js';
import ExtensionInput from '../base/extension-input.js';
import PeriodInput from './period-input.js';

export default new GraphQLInputObjectType({
  name: 'HumanNameInput',
  description: 'Name of a human - parts and usage',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)},
    use: {
      type: NameUse,
      description: 'usual | official | temp | nickname | anonymous | old | maiden'
    },
    use_: {
      type: ElementInput
    },
    text: {
      type: GraphQLString,
      description: 'Text representation of the full name'
    },
    text_: {
      type: ElementInput
    },
    family: {
      type: new GraphQLList(GraphQLString),
      description: 'Family name (often called \'Surname\')'
    },
    family_: {
      type: ElementInput
    },
    given: {
      type: new GraphQLList(GraphQLString),
      description: 'Given names (not always \'first\'). Includes middle names)'
    },
    given_: {
      type: ElementInput
    },
    prefix: {
      type: new GraphQLList(GraphQLString),
      description: 'Parts that come before the name'
    },
    prefix_: {
      type: ElementInput
    },
    suffix: {
      type: new GraphQLList(GraphQLString),
      description: 'Parts that come after the name'
    },
    suffix_: {
      type: ElementInput
    },
    period: {
      type: PeriodInput,
      description: 'Time period when name was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
