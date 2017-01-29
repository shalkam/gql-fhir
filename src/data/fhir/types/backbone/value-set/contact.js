import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import contactPoint from '../../complex/contact-point.js';
import element from '../../base/element.js';

export default new GraphQLObjectType({
  name: 'ValueSetContact',
  description: 'Contact details of the publisher',
  fields: {
    name: {
      type: GraphQLString,
      description: 'Name of an individual to contact',
    },
    name_: { type: element },
    telecom: {
      type: new GraphQLList(contactPoint),
      description: 'Contact details for individual or publisher',
    },
  },
});
