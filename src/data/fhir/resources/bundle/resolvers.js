import model from './model/index.js';

export default {
  bundleMutation: {
    removeAll(root, params, context, ast) {
      return model.removeAll(...arguments);
    },
    remove(root, params, context, ast) {
      return model.remove(...arguments);
    },
    upsert(root, params, context, ast) {
      return model.upsert(...arguments);
    }
  },
  bundleQuery: {
    find(root, params, context, ast) {
      return model.find(...arguments);
    },
    findOne(root, params, context, ast) {
      return model.findOne(...arguments);
    }
  }
};
