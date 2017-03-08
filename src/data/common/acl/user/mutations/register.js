import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';

export default {
  type: new GraphQLObjectType({
    name: 'register',
    fields: {
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      message: { type: GraphQLString }
    }
  }),
  args: {
    username: { name: 'username', type: GraphQLString },
    password: { name: 'password', type: GraphQLString }
  }
};
