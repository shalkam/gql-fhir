import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';
import ExtensionInput from './extension-input.js'
export default new GraphQLInterfaceType({
  name: 'ElementInterfaceInput',
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)}
  }
});
