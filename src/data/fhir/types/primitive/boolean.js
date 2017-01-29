import { GraphQLBoolean } from 'graphql';
import base from './base.js';
export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: GraphQLBoolean });
};
