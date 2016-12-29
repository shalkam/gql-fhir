import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'AdministrativeGender',
  description: 'The gender of a person used for administrative purposes.',
  values: {
    Male: {
      value: 'male',
      description: 'Male'
    },
    Female: {
      value: 'female',
      description: 'Female'
    },
    Other: {
      value: 'other',
      description: 'Other'
    },
    Unknown: {
      value: 'unknown',
      description: 'Unknown'
    },
  }
})
