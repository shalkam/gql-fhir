import removeAll from './remove-all';
import removeOne from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  encounter: {
    type: new GraphQLObjectType({
      name: 'encounterMutation',
      fields: { removeOne, removeAll, upsert }
    }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
