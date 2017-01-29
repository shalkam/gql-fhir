import { GraphQLInterfaceType, GraphQLList } from 'graphql';
import ExtensionInput from './extension-input.js';
import id from '../primitive/id.js';
export default new GraphQLInterfaceType({
  name: 'ElementInterfaceInput',
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(ExtensionInput) }
  }
});
