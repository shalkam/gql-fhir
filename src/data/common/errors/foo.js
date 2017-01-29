import { createError } from 'apollo-errors';

export const fooError = createError('fooError', {
  message: 'A foo error has occurred',
});
