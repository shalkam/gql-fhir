import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'AddressUse',
  description: 'The use of an address The use of an address (home / work / etc.).',
  values: {
    Home: {
      value: 'home',
      description: 'A communication address at a home.'
    },
    Office: {
      value: 'office',
      description: 'An office address. First choice for business related contacts during business hours.'
    },
    Temporary: {
      value: 'temp',
      description: 'A temporary address. The period can provide more detailed information.'
    },
    OldIncorrect: {
      value: 'old',
      description: 'This address is no longer in use (or was never correct, but retained for records).'
    }
  }
})
