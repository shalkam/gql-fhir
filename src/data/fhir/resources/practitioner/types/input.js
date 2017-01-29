import { GraphQLInputObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLInputObjectType({
  name: 'PractitionerInput',
  interfaces: [ resource, domainResource ],
  description: `A person with a formal responsibility in the provisioning of healthcare or related services`,
  fields: { ...fields({ input: true }) }
});
