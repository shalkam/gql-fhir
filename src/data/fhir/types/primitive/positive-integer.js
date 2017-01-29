import { GraphQLScalarType } from 'graphql';
import base from './base.js';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

const positiveInt = new GraphQLScalarType({
  name: 'positiveInt',
  description: 'an integer with value more than zero',
  serialize: value => {
    return value;
  },
  parseValue: value => {
    return value;
  },
  parseLiteral: ast => {
    if (ast.kind !== Kind.INT) {
      throw new GraphQLError('Query error: Can only parse integers got a: ' + ast.kind, [ ast ]);
    }
    if (!(ast.value > 0)) {
      throw new GraphQLError('Query error: Not a valid positive integer', [ ast ]);
    }

    return ast.value;
  }
});
export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: positiveInt });
};
