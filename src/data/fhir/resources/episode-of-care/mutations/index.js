import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  episodeOfCare: {
    type: new GraphQLObjectType({
      name: 'episodeOfCareMutation',
      fields: { remove, removeAll, upsert }
    }),
    resolve(root, params, context, ast) {
      return true;
    }
  }
};
