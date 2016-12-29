import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql';
import uri from '../primitive/uri.js';
import Code from '../primitive/code.js'
import ElementInterface from '../base/element-interface.js';
import Element from '../base/element.js';
import Extension from '../base/extension.js';

export default new GraphQLObjectType({
  name: 'Coding',
  description: 'A reference to a code defined by a terminology system',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)},
    uri: {
      type: uri,
      description: 'Identity of the terminology system'
    },
    uri_: {
      type: Element
    },
    version: {
      type: GraphQLString,
      description: 'Version of the system - if relevant'
    },
    version_: {
      type: Element
    },
    code: {
      type: Code,
      description: 'Symbol in syntax defined by the system'
    },
    code_: {
      type: Element
    },
    display: {
      type: GraphQLString,
      description: 'Representation defined by the system'
    },
    display_: {
      type: Element
    },
    userSelected: {
      type: GraphQLBoolean,
      description: 'If this coding was chosen directly by the user'
    },
    userSelected_: {
      type: Element
    },
  },
  isTypeOf : (value) => true
});
