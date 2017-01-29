import getFieldNames from 'graphql-list-fields';
export default class BaseModel {
  getProjection(fieldASTs) {
    return getFieldNames(fieldASTs).reduce(
      (p, c) => {
        let obj = {};
        obj[c] = 1;
        return Object.assign(p, obj);
      },
      {}
    );
  }
}
