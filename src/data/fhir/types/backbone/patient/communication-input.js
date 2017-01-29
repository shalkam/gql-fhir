import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import codeableConceptInput from '../../complex/codeable-concept-input.js';
import boolean from '../../primitive/boolean.js';
export default new GraphQLInputObjectType({
  name: 'PatientCommunicationInput',
  description: 'A list of Languages which may be used to communicate with the patient about his or her health',
  fields: {
    language: {
      type: new GraphQLNonNull(codeableConceptInput),
      description: 'The language which can be used to communicate with the patient about his or her health'
    },
    ...boolean({ name: 'preferred', description: 'Language preference indicator', input: true })
  }
});
