import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';
import extension from './extension.js';

const type = new GraphQLObjectType({
  name: 'Element',
  description: 'The base definition for all elements contained inside a resource.',
  fields: {
    id: { type: GraphQLID },
    id_: {
      get type() {
        return type;
      }
    },
    extension: { type: new GraphQLList(extension) }
  }
});
export default type;
