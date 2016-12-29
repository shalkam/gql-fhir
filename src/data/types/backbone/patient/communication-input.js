import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import CodeableConceptInput from '../../complex/codeable-concept-input.js';
import ElementInput from '../../base/element-input.js';

export default new GraphQLInputObjectType({
  name: 'PatientCommunicationInput',
  description: 'A list of Languages which may be used to communicate with the patient about his or her health',
  fields: {
    language: {
      type: new GraphQLNonNull(CodeableConceptInput),
      description: 'The language which can be used to communicate with the patient about his or her health'
    },
    preferred: {
      type: GraphQLBoolean,
      description: 'Language preference indicator'
    },
    preferred_ : {type: ElementInput}
  }
});
