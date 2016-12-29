import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import ElementInterfaceInput from '../base/element-interface-input.js'
import ExtensionInput from '../base/extension-input.js';
import ElementInput from '../base/element-input.js';

export default new GraphQLInputObjectType({
  name: 'ReferenceInput',
  description: 'A reference from one resource to another',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: { type: new GraphQLList(ExtensionInput)},
    reference: {
      type: GraphQLID,
      description: 'Relative, internal or absolute URL reference'
    },
    reference_: {
      type: ElementInput
    },
    display: {
      type: GraphQLString,
      description: 'Text alternative for the resource'
    },
    display_: {
      type: ElementInput
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
