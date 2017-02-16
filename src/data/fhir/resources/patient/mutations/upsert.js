import { GraphQLNonNull, GraphQLID } from 'graphql';
import { patient, patientInput } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: patient,
  args: { data: { name: 'data', type: new GraphQLNonNull(patientInput) } },
  resolve(root, params, context, ast) {
    return model.upsert(...arguments);
  }
};
