import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

export default {
  type: new GraphQLObjectType({ name: 'logout', fields: { result: { type: GraphQLBoolean } } })
};
