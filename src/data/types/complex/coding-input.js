import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql';
import uri from '../primitive/uri.js';
import Code from '../primitive/code.js'
import ElementInterfaceInput from '../base/element-interface-input.js';
import ElementInput from '../base/element-input.js';
import ExtensionInput from '../base/extension-input.js';

export default new GraphQLInputObjectType({
  name: 'CodingInput',
  description: 'A reference to a code defined by a terminology system',
  interfaces: [ElementInterfaceInput],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)},
    uri: {
      type: uri,
      description: 'Identity of the terminology system'
    },
    uri_: {
      type: ElementInput
    },
    version: {
      type: GraphQLString,
      description: 'Version of the system - if relevant'
    },
    version_: {
      type: ElementInput
    },
    code: {
      type: Code,
      description: 'Symbol in syntax defined by the system'
    },
    code_: {
      type: ElementInput
    },
    display: {
      type: GraphQLString,
      description: 'Representation defined by the system'
    },
    display_: {
      type: ElementInput
    },
    userSelected: {
      type: GraphQLBoolean,
      description: 'If this coding was chosen directly by the user'
    },
    userSelected_: {
      type: ElementInput
    },
  },
  isTypeOf : (value) => true
});
