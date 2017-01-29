import passport from 'passport';
import shortid from 'shortid';
import baseModel from '../../../../common/base/model.js';
import model from './model.js';

class modelIndex extends baseModel {
  upsert(root, params, context, ast) {
    const projection = this.getProjection(ast);
    if (!params.data.id) {
      params.data.id = shortid.generate();
    }
    params.data.resourceType = 'Patient';
    const upserted = model
      .findByIdAndUpdate(params.data.id, params.data, {
        new: true,
        upsert: true,
        select: projection
      })
      .exec();

    if (!upserted) {
      throw new Error('Error upserting');
    }
    return upserted;
  }
  async remove(root, params, context, ast) {
    const projection = this.getProjection(ast);
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
    return model.find().select(projection).exec();
  }
  async findOne(root, params, context, ast) {
    const projection = this.getProjection(ast);
    return model.findById(params.id).select(projection).exec();
  }
}

export default new modelIndex();
