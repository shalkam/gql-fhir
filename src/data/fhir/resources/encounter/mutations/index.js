import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  encounter: {
    type: new GraphQLObjectType({
      name: 'encounterMutation',
      fields: { remove, removeAll, upsert }
    })
  }
};
