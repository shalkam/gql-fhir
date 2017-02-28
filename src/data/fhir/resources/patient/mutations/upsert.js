import { GraphQLNonNull, GraphQLID } from 'graphql';
import { patient, patientInput } from '../../../profiles/resources/index.js';

export default {
  type: patient,
  args: { data: { name: 'data', type: new GraphQLNonNull(patientInput) } }
};
