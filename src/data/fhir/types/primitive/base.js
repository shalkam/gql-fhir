import element from '../base/element.js';
import elementInput from '../base/element-input.js';
import { GraphQLNonNull, GraphQLList } from 'graphql';

export default ({ name, description, input, required, multiple, type }) => {
  let field = {};
  if (multiple) {
    type = new GraphQLList(type);
  }
  if (required) {
    type = new GraphQLNonNull(type);
  }
  field[name] = { type, description };
  if (input == true) {
    field[name + '_'] = { type: elementInput };
  } else if (input === null) {
  } else {
    field[name + '_'] = { type: element };
  }
  return field;
};
