import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  patient: {
    type: new GraphQLObjectType({ name: 'patientMutation', fields: { removeAll, remove, upsert } }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
