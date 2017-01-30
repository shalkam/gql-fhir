import { GraphQLObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'Encounter',
  description: `An interaction during which services are provided to the patient`,
  interfaces: [ resource, domainResource ],
  fields: { ...fields({}) },
  isTypeOf: function(value) {
    return value.resourceType === this.name;
  }
});
