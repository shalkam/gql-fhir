import AbstractStore from '../../../../Common/abstracts/AbstractStore';

export default class StoreIndex extends AbstractStore {
  constructor(props) {
    super(props);
  }
  post(url, data) {
    if (data.evaluation)
      data.evaluation = data.evaluation.filter((value) => value !== null);
    return this.ajax(url, 'POST', data);
  }
  update(url, data) {
    if (data.evaluation)
      data.evaluation = data.evaluation.filter((value) => value !== null);
    return this.ajax(url, 'PUT', data);
  }
  getStandards() {
    return this.ajax(this.getPath('index') + '/standards', 'GET', null);
  }
}
