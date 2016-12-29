import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'AddressType',
  description: 'The type of an address (physical / postal) The type of an address (physical / postal).',
  values: {
    Postal: {
      value: 'physical',
      description: 'Mailing addresses - PO Boxes and care-of addresses.'
    },
    Physical: {
      value: 'physical',
      description: 'A physical address that can be visited.'
    },
    PhysicalPostal: {
      value: 'both',
      description: 'An address that is both physical and postal.'
    }
  }
})
