import base from './base.js';
import ValidateType from '../helpers/validate.js';
import id from './def/id';

export default ({ name, description, input, required, multiple }) => {
  return base({ name, description, input, required, multiple, type: id });
};
