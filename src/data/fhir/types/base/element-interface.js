import { GraphQLInterfaceType, GraphQLID, GraphQLList } from 'graphql';
import Extension from './extension.js';
import id from '../primitive/id.js';
export default new GraphQLInterfaceType({
  name: 'ElementInterface',
  fields: { ...id({ name: 'id' }), extension: { type: new GraphQLList(Extension) } }
});
