import {
  GraphQLObjectType,
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
import Element from '../base/element.js';
import Extension from '../base/extension.js';
import ElementInterface from '../base/element-interface.js';

export default new GraphQLObjectType({
  name: 'Period',
  interfaces: [ElementInterface],
  description: 'Time range defined by start and end date/time If present, start SHALL have a lower value than end',
  fields: {
    _id: {type: GraphQLID},
    extension: {type: new GraphQLList(Extension)},
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
    console.log(value);
    return true;
  }
});
