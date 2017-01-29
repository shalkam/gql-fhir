import { GraphQLInterfaceType } from 'graphql';
import id from '../../types/primitive/id.js';
import string from '../../types/primitive/string.js';
export default new GraphQLInterfaceType({
  name: 'Resource',
  fields: {
    ...id({ name: 'id', input: null }),
    ...string({ name: 'implicitRules', input: null }),
    ...string({ name: 'language', input: null })
  }
});
