import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql';
import fields from './fields.js';
export default function(json, type) {
  const objType = { input: GraphQLInputObjectType, output: GraphQLObjectType };
  const schema = new objType[type === 'input' ? 'input' : 'output']({
    name: type === 'input'
      ? json.snapshot.element[0].path + 'Input'
      : json.snapshot.element[0].path,
    description: json.snapshot.element[0].short ? json.snapshot.element[0].short : null,
    fields: () => fields.init(json, type, schema)
  });
  return schema;
}
