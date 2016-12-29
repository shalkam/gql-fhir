import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';
import Coding from './coding.js';
import Element from '../base/element.js';
import Extension from '../base/extension.js';
import ElementInterface from '../base/element-interface.js';

export default new GraphQLObjectType({
  name: 'CodeableConcept',
  description: 'Plain text representation of the concept',
  interfaces: [ElementInterface],
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)},
    coding: {
      type: new GraphQLList(Coding),
      description: 'Code defined by a terminology system'
    },
    text: {
      type: GraphQLString,
      description: 'Plain text representation of the concept'
    },
    text_: {
      type: Element
    }
  },
  isTypeOf: (value) => true
});
