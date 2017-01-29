import { GraphQLObjectType } from 'graphql';
import fields from './fields.js';

export default new GraphQLObjectType({ name: 'Role', fields: { ...fields() } });
