import querystring from 'querystring';
import passport from 'passport';
import shortid from 'shortid';
import baseModel from '../../../base/model.js';
import model from './model.js';

class modelIndex extends baseModel {
  async login(root, params, context, ast) {
    let res = {};
    if (typeof context.req.user === 'undefined') {
      context.req.body.username = params.username;
      context.req.body.password = params.password;
      const auth = passport.authenticate('local')(context.req);
      const user = await auth['local']
        .then(user => {
          context.req.logIn(user, function(err) {
            res = user;
            res.message = 'Logged in successfully!';
          });
        })
        .catch(err => {
          res = err;
        });
    } else {
      res = new Error('Already logged in');
    }
    return res;
  }
  logout(root, params, context, ast) {
    let res = { result: true };
    if (typeof context.req.user === 'undefined') {
      res = new Error("Not logged in, can't log out");
    }
    context.req.logout();
    return res;
  }
  async register(root, params, context, ast) {
    let res = {};
    const _id = shortid.generate();
    // const projection = this.getProjection(ast.operation.selectionSet.selections[0]);
    const register = await model
      .register(new model({ _id, username: params.username }), params.password)
      .then(user => {
        res = user;
        res.password = params.password;
        res.message = 'registered successfully!';
      })
      .catch(err => {
        if (err) {
          res = err;
        }
      });
    return res;
  }
  // async upsert(root, params, context, ast) {
  //   const projection = this.getProjection(ast.operation.selectionSet.selections[0]);
  //   if (!params.data._id) {
  //     params.data._id = shortid.generate();
  //   }
  //   const res = await model.findByIdAndUpdate(params.data._id, params.data, { new: true, upsert: true, select: projection }).exec();
  //
  //   if (!upserted) {
  //     res = new Error('Error upserting');
  //   }
  //   return res;
  // }
}

export default new modelIndex();
