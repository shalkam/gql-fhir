import findOne from './find-one.js';
import find from './find.js';
import { GraphQLObjectType } from 'graphql';

export default {
  patient: { type: new GraphQLObjectType({ name: 'patientQuery', fields: { find, findOne } }) }
};
