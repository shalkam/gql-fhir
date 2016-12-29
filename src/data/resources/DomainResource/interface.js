import {
  GraphQLInterfaceType,
  GraphQLString
} from 'graphql';

export default new GraphQLInterfaceType({
  name: 'DomainResource',
  fields: {
    text: {type: GraphQLString}
  }
});
