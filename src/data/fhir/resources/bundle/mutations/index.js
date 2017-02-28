import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  bundle: {
    type: new GraphQLObjectType({ name: 'bundleMutation', fields: { remove, removeAll, upsert } })
  }
};
