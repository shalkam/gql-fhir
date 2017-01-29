import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';

export default new GraphQLObjectType({
  name: 'Extension',
  description: 'Every element in a resource or data type includes an optional "extension" child element that may be present any number of times.',
  fields: {
    url: { type: new GraphQLNonNull(GraphQLString) },
    valueString: { type: GraphQLString },
    valueBoolean: { type: GraphQLBoolean },
    valueUri: { type: GraphQLString }
  }
});
