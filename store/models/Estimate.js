import { Record } from 'immutable';

import User from './User';

class Estimate extends Record({
  user: User(),
  card: null,
}) {
  constructor(estimate) {
    super({
      ...estimate,
      user: User(estimate.user),
    });
  }
}

module.exports = Estimate;
