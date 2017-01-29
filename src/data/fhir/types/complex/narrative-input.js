import { GraphQLInputObjectType, GraphQLList } from 'graphql';
import elementInterfaceInput from '../base/element-interface-input.js';
import extensionInput from '../base/extension-input.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';

export default new GraphQLInputObjectType({
  name: 'NarrativeInput',
  description: 'A human-readable formatted text, including images',
  interfaces: [ elementInterfaceInput ],
  fields: {
    ...id({ name: 'id', input: true }),
    extension: { type: new GraphQLList(extensionInput) },
    ...code({
      name: 'status',
      description: 'generated | extensions | additional | empty NarrativeStatus (Required)',
      input: true
    }),
    ...string({
      name: 'div',
      description: `Limited xhtml content
The narrative SHALL have some non-whitespace content
The narrative SHALL contain only the basic html formatting elements described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes
The narrative SHALL contain only the basic html formatting attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes`,
      input: true
    })
  },
  isTypeOf: value => {
    return true;
  }
});
