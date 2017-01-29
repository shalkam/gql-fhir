import base from './base.js';
import {
  // GraphQLEmail,
  // GraphQLURL,
  // GraphQLLimitedString,
  // GraphQLPassword,
  // GraphQLUUID
  GraphQLDateTime
} from 'graphql-custom-types';
export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: GraphQLDateTime });
};
