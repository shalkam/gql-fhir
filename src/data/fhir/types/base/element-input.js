import { GraphQLInputObjectType, GraphQLList, GraphQLID } from 'graphql';
import extensionInput from './extension-input.js';

const type = new GraphQLInputObjectType({
  name: 'ElementInput',
  description: 'The base definition for all elements contained inside a resource.',
  fields: {
    id: { type: GraphQLID },
    id_: {
      get type() {
        return type;
      }
    },
    extension: { type: new GraphQLList(extensionInput) }
  }
});
export default type;
