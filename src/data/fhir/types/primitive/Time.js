import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'time',
  description: 'time in the 24 hours',
  values: {
    DAY: {
      value: 'day',
      description: 'posted during the day',
    },
    NIGHT: {
      value: 'night',
      description: 'posted during the night',
    }
  }
})
