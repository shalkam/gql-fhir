import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import id from '../primitive/id.js';
import dateTime from '../primitive/date-time.js';

export default new GraphQLInputObjectType({
  name: 'PeriodInput',
  interfaces: [ elementInterfaceInput ],
  description: 'Time range defined by start and end date/time If present, start SHALL have a lower value than end',
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...dateTime({
      name: 'start',
      description: 'Starting time with inclusive boundary',
      input: true
    }),
    ...dateTime({
      name: 'end',
      description: 'End time with inclusive boundary, if not ongoing',
      input: true
    })
  },
  isTypeOf: value => {
    return true;
  }
});
