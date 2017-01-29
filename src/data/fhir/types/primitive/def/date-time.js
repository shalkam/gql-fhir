import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'dateTime',
  description: 'A date, date-time or partial date (e.g. just year or year + month) as used in human communication. If hours and minutes are specified, a time zone SHALL be populated. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored. Dates SHALL be valid dates. The time "24:00" is not allowed',
  serialize: value => {
    const localDate = new Date(value);
    return localDate.toString();
  },
  parseValue: value => {
    const localDate = new Date(value);
    return localDate.toString();
  },
  parseLiteral: ast => {
    const date = new Date(ast.value);
    return date;
  }
});
