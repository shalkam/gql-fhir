import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInterfaceType({
  name: 'Resource',
  fields: {
    _id: {type: GraphQLString},
    implicitRules: {type: GraphQLString},
    language: {type: GraphQLString}
  }
});
