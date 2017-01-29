import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import codeableConcept from '../../complex/codeable-concept.js';
import boolean from '../../primitive/boolean.js';
export default new GraphQLObjectType({
  name: 'PatientCommunication',
  description: 'A list of Languages which may be used to communicate with the patient about his or her health',
  fields: {
    language: {
      type: new GraphQLNonNull(codeableConcept),
      description: 'The language which can be used to communicate with the patient about his or her health'
    },
    ...boolean({ name: 'preferred', description: 'Language preference indicator' })
  }
});
