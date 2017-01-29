import ValidateType from '../helpers/validate.js';
import base from './base.js';

const code = ValidateType({
  name: 'code',
  description: 'Indicates that the value is taken from a set of controlled strings defined elsewhere (see Using codes for further discussion). Technically, a code is restricted to a string which has at least one character and no leading or trailing whitespace, and where there is no whitespace other than single spaces in the contents regex: [^\s]+([\s]+[^\s]+)*',
  type: 'STRING',
  regex: /[^\s]+([\s]+[^\s]+)*/
});

export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: code });
};
