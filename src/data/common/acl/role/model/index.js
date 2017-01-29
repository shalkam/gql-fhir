import querystring from 'querystring';
import passport from 'passport';
import shortid from 'shortid';
import baseModel from '../../../base/model.js';
// import model from './model.js';
class modelIndex extends baseModel {
  async upsert(root, params, { acl, req }, ast) {
    console.log(acl);
    // acl.allow('guest', 'blogs', 'view');
    // acl.addUserRoles('test', 'guest');
  }
}

export default new modelIndex();
