import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  searchParameter: {
    type: new GraphQLObjectType({
      name: 'searchParameterMutation',
      fields: { remove, removeAll, upsert }
    })
  }
};
