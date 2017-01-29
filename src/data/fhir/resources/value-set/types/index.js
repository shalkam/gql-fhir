import { GraphQLObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLObjectType({
  name: 'ValueSet',
  description: `A set of codes drawn from one or more code systems
A defined code system (if present) SHALL have a different url than the value set url
Value set SHALL contain at least one of a codeSystem, a compose, or an expansion element
A value set with only one import SHALL also have an include and/or an exclude unless the value set includes and inline code system`,
  interfaces: [ resource, domainResource ],
  fields: { ...fields({}) },
  isTypeOf: function(value) {
    return value.resourceType === this.name;
  }
});
