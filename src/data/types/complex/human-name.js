import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import NameUse from '../enums/name-use.js'
import ElementInterface from '../base/element-interface.js'
import Element from '../base/element.js';
import Extension from '../base/extension.js';
import Period from './period.js';

export default new GraphQLObjectType({
  name: 'HumanName',
  description: 'Name of a human - parts and usage',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)},
    use: {
      type: NameUse,
      description: 'usual | official | temp | nickname | anonymous | old | maiden'
    },
    use_: {
      type: Element
    },
    text: {
      type: GraphQLString,
      description: 'Text representation of the full name'
    },
    text_: {
      type: Element
    },
    family: {
      type: new GraphQLList(GraphQLString),
      description: 'Family name (often called \'Surname\')'
    },
    family_: {
      type: Element
    },
    given: {
      type: new GraphQLList(GraphQLString),
      description: 'Given names (not always \'first\'). Includes middle names)'
    },
    given_: {
      type: Element
    },
    prefix: {
      type: new GraphQLList(GraphQLString),
      description: 'Parts that come before the name'
    },
    prefix_: {
      type: Element
    },
    suffix: {
      type: new GraphQLList(GraphQLString),
      description: 'Parts that come after the name'
    },
    suffix_: {
      type: Element
    },
    period: {
      type: Period,
      description: 'Time period when name was/is in use'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
