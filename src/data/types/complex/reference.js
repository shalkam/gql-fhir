import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import ElementInterface from '../base/element-interface.js'
import Extension from '../base/extension.js';
import Element from '../base/element.js';

export default new GraphQLObjectType({
  name: 'Reference',
  description: 'A reference from one resource to another',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: { type: new GraphQLList(Extension)},
    reference: {
      type: GraphQLID,
      description: 'Relative, internal or absolute URL reference'
    },
    reference_: {
      type: Element
    },
    display: {
      type: GraphQLString,
      description: 'Text alternative for the resource'
    },
    display_: {
      type: Element
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
