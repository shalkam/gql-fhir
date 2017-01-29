import { GraphQLObjectType, GraphQLList } from 'graphql';
import extension from '../base/extension.js';
import elementInterface from '../base/element-interface.js';
import id from '../primitive/id.js';
import dateTime from '../primitive/date-time.js';

export default new GraphQLObjectType({
  name: 'Period',
  interfaces: [ elementInterface ],
  description: 'Time range defined by start and end date/time If present, start SHALL have a lower value than end',
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...dateTime({ name: 'start', description: 'Starting time with inclusive boundary' }),
    ...dateTime({ name: 'end', description: 'End time with inclusive boundary, if not ongoing' })
  },
  isTypeOf: value => {
    return true;
  }
});
