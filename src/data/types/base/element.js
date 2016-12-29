import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLID
} from 'graphql';
import Extension from './extension.js';

export default new GraphQLObjectType({
  name: 'Element',
  description: 'The base definition for all elements contained inside a resource.',
  fields: {
    id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)}
  }
});
