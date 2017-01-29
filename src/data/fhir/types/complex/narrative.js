import { GraphQLObjectType, GraphQLList } from 'graphql';
import elementInterface from '../base/element-interface.js';
import extension from '../base/extension.js';
import code from '../primitive/code.js';
import string from '../primitive/string.js';
import id from '../primitive/id.js';
export default new GraphQLObjectType({
  name: 'Narrative',
  description: 'A human-readable formatted text, including images',
  interfaces: [ elementInterface ],
  fields: {
    ...id({ name: 'id' }),
    extension: { type: new GraphQLList(extension) },
    ...code({
      name: 'status',
      description: 'generated | extensions | additional | empty NarrativeStatus (Required)'
    }),
    ...string({
      name: 'div',
      description: `Limited xhtml content
The narrative SHALL have some non-whitespace content
The narrative SHALL contain only the basic html formatting elements described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes
The narrative SHALL contain only the basic html formatting attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes`
    })
  },
  isTypeOf: value => {
    return true;
  }
});
