import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'IdentifierUse',
  description: 'Identifies the purpose for this identifier, if known .',
  values: {
    Usual: {
      value: 'usual',
      description: 'The identifier recommended for display and use in real-world interactions.'
    },
    Official: {
      value: 'official',
      description: 'The identifier considered to be most trusted for the identification of this item.'
    },
    Temp: {
      value: 'temp',
      description: 'A temporary identifier.'
    },
    Secondary: {
      value: 'secondary',
      description: 'An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.'
    }
  }
})
