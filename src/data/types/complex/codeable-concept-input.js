import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import CodingInput from './coding-input.js';
import ElementInput from '../base/element-input.js';
import ExtensionInput from '../base/extension-input.js';
import ElementInterfaceInput from '../base/element-interface-input.js';

export default new GraphQLInputObjectType({
  name: 'CodeableConceptInput',
  description: 'Plain text representation of the concept',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)},
    coding: {
      type: new GraphQLList(CodingInput),
      description: 'Code defined by a terminology system'
    },
    text: {
      type: GraphQLString,
      description: 'Plain text representation of the concept'
    },
    text_: {
      type: ElementInput
    }
  },
  isTypeOf: (value) => true
});
