import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import schema from './schema.graphql';
import queries from './queries';
import mutations from './mutations';
import resolvers from '../data/resolvers.js';
import { addResolveFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
let gqlSchema;
if (process.env.NODE_ENV === 'production') {
  gqlSchema = makeExecutableSchema({ typeDefs: schema, resolvers });
} else {
  gqlSchema = new GraphQLSchema({
    query: new GraphQLObjectType({ name: 'Query', fields: queries }),
    mutation: new GraphQLObjectType({ name: 'Mutation', fields: mutations })
  });
  addResolveFunctionsToSchema(gqlSchema, resolvers);
}
export default gqlSchema;
