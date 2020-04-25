import { Record } from 'immutable';
import Story from './Story';

class Voting extends Record({
  votingId: '',
  story: Story(),
  finishTime: Date.now(),
}) {
  constructor(voting) {
    super({
      ...voting,
      story: Story(voting.story),
    });
  }
}

export default Voting;
