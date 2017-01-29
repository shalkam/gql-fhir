import { GraphQLInputObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLInt } from 'graphql';
import { GraphQLDateTime } from 'graphql-custom-types';

export default input => {
  let fields = {
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  };
  if (input) {
  }
  return fields;
};
