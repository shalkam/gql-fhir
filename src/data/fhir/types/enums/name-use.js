import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'NameUse',
  description: 'The use of a human name',
  values: {
    Usual: {
      value: 'usual',
      description: 'Known as/conventional/the one you normally use'
    },
    Official: {
      value: 'official',
      description: 'The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".'
    },
    Temp: {
      value: 'temp',
      description: 'A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.'
    },
    Nickname: {
      value: 'nickname',
      description: 'A name that is used to address the person in an informal manner, but is not part of their formal or usual name'
    },
    Anonynmous: {
      value: 'anonymous',
      description: 'Anonymous assigned name, alias, or pseudonym (used to protect a person\'s identity for privacy reasons)'
    },
    Old: {
      value: 'old',
      description: 'This name is no longer in use (or was never correct, but retained for records)'
    },
    Maiden: {
      value: 'maiden',
      description: 'A name used prior to marriage. Marriage naming customs vary greatly around the world. This name use is for use by applications that collect and store "maiden" names. Though the concept of maiden name is often gender specific, the use of this term is not gender specific. The use of this term does not imply any particular history for a person\'s name, nor should the maiden name be determined algorithmically.'
    }
  }
})
