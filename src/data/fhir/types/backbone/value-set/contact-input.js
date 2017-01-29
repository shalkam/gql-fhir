import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql';
import contactPointInput from '../../complex/contact-point-input.js';
import elementInput from '../../base/element-input.js';

export default new GraphQLInputObjectType({
  name: 'ValueSetContactInput',
  description: 'Contact details of the publisher',
  fields: {
    name: {
      type: GraphQLString,
      description: 'Name of an individual to contact',
    },
    name_: { type: elementInput },
    telecom: {
      type: new GraphQLList(contactPointInput),
      description: 'Contact details for individual or publisher',
    },
  },
});
