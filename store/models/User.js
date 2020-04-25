import { Record } from 'immutable';

const User = Record({
  username: '',
  isHost: false,
});

export default User;
