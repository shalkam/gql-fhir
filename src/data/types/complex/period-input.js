import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLList
} from 'graphql';
import {
  // GraphQLEmail,
  // GraphQLURL,
  GraphQLDateTime,
  // GraphQLLimitedString,
  // GraphQLPassword,
  // GraphQLUUID
} from 'graphql-custom-types';
import ElementInterfaceInput from '../base/element-interface-input.js';
import ElementInput from '../base/element-input.js';
import ExtensionInput from '../base/extension-input.js';

export default new GraphQLInputObjectType({
  name: 'PeriodInput',
  interfaces: [ElementInterfaceInput],
  description: 'Time range defined by start and end date/time If present, start SHALL have a lower value than end',
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(ExtensionInput)},
    start: {
      type: GraphQLDateTime,
      description: 'Starting time with inclusive boundary'
    },
    end: {
      type: GraphQLDateTime,
      description: 'End time with inclusive boundary, if not ongoing'
    }
  },
  isTypeOf: (value) => {
    return true;
  }
});
