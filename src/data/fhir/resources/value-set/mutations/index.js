import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  valueSet: {
    type: new GraphQLObjectType({ name: 'valueSetMutation', fields: { remove, removeAll, upsert } })
  }
};
