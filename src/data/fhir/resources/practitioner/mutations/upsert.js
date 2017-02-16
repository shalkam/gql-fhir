import { GraphQLNonNull, GraphQLID } from 'graphql';
import { practitioner, practitionerInput } from '../../../profiles/resources/index.js';
import model from '../model/index.js';

export default {
  type: practitioner,
  args: { data: { name: 'data', type: new GraphQLNonNull(practitionerInput) } },
  resolve(root, params, context, ast) {
    return model.upsert(...arguments);
  }
};
