import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'ContactPointUse',
  description: 'Use of contact point',
  values: {
    Home: {
      value: 'home',
      description: '	A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.',
    },
    Work: {
      value: 'work',
      description: 'An office contact point. First choice for business related contacts during business hours.'
    },
    Temp: {
      value: 'temp',
      description: 'A temporary contact point. The period can provide more detailed information.'
    },
    Old: {
      value: 'old',
      description: 'This contact point is no longer in use (or was never correct, but retained for records).'
    },
    Mobile: {
      value: 'mobile',
      description: 'A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.'
    }
  }
})
