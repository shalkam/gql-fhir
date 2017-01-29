import { GraphQLObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'Practitioner',
  description: `A person with a formal responsibility in the provisioning of healthcare or related services`,
  interfaces: [ resource, domainResource ],
  fields: { ...fields({}) },
  isTypeOf: function(value) {
    return value.resourceType === this.name;
  }
});
