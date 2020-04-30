import { Record, List } from 'immutable';

import Story from './Story';
import Estimate from './Estimate';

class Voting extends Record({
  votingId: '',
  story: Story(),
  estimates: List(),
  finishTime: Date.now(),
  resultCard: null,
}) {
  constructor(voting) {
    super({
      ...voting,
      story: Story(voting.story),
      estimates:
        voting.estimates &&
        List(voting.estimates.map(estimate => new Estimate(estimate))),
    });
  }
}

export default Voting;
