import removeAll from './remove-all';
import removeOne from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  valueSet: {
    type: new GraphQLObjectType({
      name: 'valueSetMutation',
      fields: { removeOne, removeAll, upsert }
    }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
