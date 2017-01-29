import passport from 'passport';
import shortid from 'shortid';
import baseModel from '../../../../common/base/model.js';
import model from './model.js';

class modelIndex extends baseModel {
  upsert(root, params, context, ast) {
    const projection = this.getProjection(ast);
    // tried to delegate this part to mongoose model but failed
    if (!params.data.id) {
      params.data.id = shortid.generate();
    }
    params.data.resourceType = 'Practitioner';
    let res = model
      .findByIdAndUpdate(params.data.id, params.data, {
        new: true,
        upsert: true,
        select: projection
      })
      .exec();

    if (!res) {
      res = new Error('Error upserting');
    }
    return res;
  }
  async remove(root, params, context, ast) {
    const projection = this.getProjection(ast.operation.selectionSet.selections[0]);
    const removed = await model.findByIdAndRemove(params.id, { select: projection }).exec();

    if (!removed) {
      throw new Error('Error removing blog post');
    }
    return removed;
  }
  async removeAll(root, params, context, ast) {
    const removed = await model.remove({}).exec();
    return removed;
  }
  async find(root, params, context, ast) {
    const projection = this.getProjection(ast);
    const res = await model.find().select(projection).exec();
    return res;
  }
  async findOne(root, params, context, ast) {
    const projection = this.getProjection(ast);
    const res = await model.findById(params.id).select(projection).exec();
    return res;
  }
}

export default new modelIndex();
