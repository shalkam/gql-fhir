import { GraphQLObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'Patient',
  description: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
  interfaces: [ resource, domainResource ],
  fields: { ...fields({}) },
  isTypeOf: function(value) {
    return value.resourceType === this.name;
  }
});
