import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  relatedPerson: {
    type: new GraphQLObjectType({
      name: 'relatedPersonMutation',
      fields: { remove, removeAll, upsert }
    })
  }
};
