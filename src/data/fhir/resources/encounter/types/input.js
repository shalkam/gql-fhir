import { GraphQLInputObjectType } from 'graphql';
import resource from '../../resource/interface.js';
import domainResource from '../../domain-resource/interface.js';
import fields from './fields.js';

export default new GraphQLInputObjectType({
  name: 'EncounterInput',
  interfaces: [ resource, domainResource ],
  description: `An interaction during which services are provided to the patient`,
  fields: { ...fields({ input: true }) }
});
