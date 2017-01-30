import { GraphQLObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'RelatedPerson',
  description: `An person that is related to a patient, but who is not a direct target of care`,
  interfaces: [ resource, domainResource ],
  fields: { ...fields({}) },
  isTypeOf: function(value) {
    return value.resourceType === this.name;
  }
});
