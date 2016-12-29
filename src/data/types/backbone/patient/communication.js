import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import CodeableConcept from '../../complex/codeable-concept.js';
import Element from '../../base/element.js';

export default new GraphQLObjectType({
  name: 'PatientCommunication',
  description: 'A list of Languages which may be used to communicate with the patient about his or her health',
  fields: {
    language: {
      type: new GraphQLNonNull(CodeableConcept),
      description: 'The language which can be used to communicate with the patient about his or her health'
    },
    preferred: {
      type: GraphQLBoolean,
      description: 'Language preference indicator'
    },
    preferred_ : {type: Element}
  }
});
