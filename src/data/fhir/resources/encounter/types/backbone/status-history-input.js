import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import periodInput from '../../../../types/complex/period-input.js';
import extensionInput from '../../../../types/base/extension-input.js';
import code from '../../../../types/primitive/code.js';

export default new GraphQLInputObjectType({
  name: 'StatusHistoryInput',
  description: 'List of past encounter statuses',
  fields: {
    modifierExtension: { type: new GraphQLList(extensionInput) },
    ...code({
      name: 'status',
      description: 'planned | arrived | in-progress | onleave | finished | cancelled EncounterState (Required)',
      input: true
    }),
    period: {
      type: periodInput,
      description: 'The time that the episode was in the specified status'
    }
  }
});
