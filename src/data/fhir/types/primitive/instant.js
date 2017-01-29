import { GraphQLScalarType } from 'graphql';
import base from './base.js';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

const instant = new GraphQLScalarType({
  name: 'instant',
  description: 'A date, date-time or partial date (e.g. just year or year + month) as used in human communication. If hours and minutes are specified, a time zone SHALL be populated. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored. Dates SHALL be valid dates. The time "24:00" is not allowed',
  serialize: value => {
    const localDate = new Date();
    return localDate.toString();
  },
  parseValue: value => {
    const localDate = new Date();
    return localDate.toString();
  },
  parseLiteral: ast => {
    const date = new Date();
    return date;
  }
});
export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: instant });
};
