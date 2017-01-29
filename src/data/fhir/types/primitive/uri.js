// import {
//   // GraphQLEmail,
//   // GraphQLDateTime,
//   // GraphQLLimitedString,
//   // GraphQLPassword,
//   // GraphQLUUID,
//   GraphQLURL
// } from 'graphql-custom-types';
import { GraphQLString } from 'graphql';
import base from './base.js';
export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: GraphQLString });
};
