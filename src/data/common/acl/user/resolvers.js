import model from './model/index.js';

export default {
  login(root, params, context, ast) {
    console.log('testing');
    return model.login(...arguments);
  },
  logout(root, params, context, ast) {
    return model.logout(...arguments);
  },
  register(root, params, context, ast) {
    return model.register(...arguments);
  }
};
