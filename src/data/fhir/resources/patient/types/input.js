import { GraphQLInputObjectType } from 'graphql';
import domainResource from '../../domain-resource/interface.js';
import resource from '../../resource/interface.js';
import fields from './fields.js';

export default new GraphQLInputObjectType({
  name: 'PatientInput',
  interfaces: [ resource, domainResource ],
  fields: { ...fields({ input: true }) }
});
