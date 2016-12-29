import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';
import Resource from '../../Resource/interface.js'
import DomainResource from '../../DomainResource/interface.js';
import fields from './fields.js';

export default new GraphQLInputObjectType({
  name: 'PatientInput',
  interfaces: [Resource, DomainResource],
  fields: {
    ...fields('input')
  }
});
