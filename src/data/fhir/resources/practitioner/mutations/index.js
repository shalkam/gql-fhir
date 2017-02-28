import removeAll from './remove-all';
import remove from './remove';
import upsert from './upsert';
import { GraphQLObjectType } from 'graphql';

export default {
  practitioner: {
    type: new GraphQLObjectType({
      name: 'practitionerMutation',
      fields: { remove, removeAll, upsert }
    })
  }
};
