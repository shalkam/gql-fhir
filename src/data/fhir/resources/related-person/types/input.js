import { GraphQLInputObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLInputObjectType({
  name: 'RelatedPersonInput',
  interfaces: [ resource, domainResource ],
  description: `An person that is related to a patient, but who is not a direct target of care`,
  fields: { ...fields({ input: true }) }
});
