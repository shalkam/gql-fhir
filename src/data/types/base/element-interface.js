import {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLList
} from 'graphql';
import Extension from './extension.js'
export default new GraphQLInterfaceType({
  name: 'ElementInterface',
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)}
  }
});
