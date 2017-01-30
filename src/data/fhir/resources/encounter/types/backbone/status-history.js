import { GraphQLObjectType, GraphQLList } from 'graphql';
import period from '../../../../types/complex/period.js';
import extension from '../../../../types/base/extension.js';
import code from '../../../../types/primitive/code.js';

export default new GraphQLObjectType({
  name: 'StatusHistory',
  description: 'List of past encounter statuses',
  fields: {
    modifierExtension: { type: new GraphQLList(extension) },
    ...code({
      name: 'status',
      description: 'planned | arrived | in-progress | onleave | finished | cancelled EncounterState (Required)'
    }),
    period: { type: period, description: 'The time that the episode was in the specified status' }
  }
});
