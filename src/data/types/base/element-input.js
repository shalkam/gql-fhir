import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLID
} from 'graphql';
import ExtensionInput from './extension-input.js';

export default new GraphQLInputObjectType({
  name: 'ElementInput',
  description: 'The base definition for all elements contained inside a resource.',
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)}
  }
});
