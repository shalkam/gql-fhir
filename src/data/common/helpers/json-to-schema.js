import { GraphQLObjectType } from 'graphql';
export default json => {
  let snapshot = json.snapshot.element;
  const fields = snapshot.map(item => {
    if (item.path !== json.id) {
      console.log(item);
      return item;
    }
  });
  console.log(fields);
  const schema = new GraphQLObjectType({
    name: snapshot[0].path + 'JSON',
    description: snapshot[0].definition,
    fields: {}
  });
  console.log(schema);
  return schema;
};
