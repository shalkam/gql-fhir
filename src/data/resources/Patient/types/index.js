import {
  GraphQLObjectType
} from 'graphql';
import Resource from '../../Resource/interface.js'
import DomainResource from '../../DomainResource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'Patient',
  description: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
  interfaces: [Resource, DomainResource],
  fields: {
    ...fields()
  },
  isTypeOf: (value) => {
    return true;
  }
});
