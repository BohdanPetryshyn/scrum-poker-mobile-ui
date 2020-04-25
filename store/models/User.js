import { Record } from 'immutable';

const User = Record({
  username: '',
  isVoted: false,
});

export default User;
