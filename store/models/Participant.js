import { Record } from 'immutable';

const Participant = Record({
  username: '',
  isVoted: false,
});

export default Participant;
