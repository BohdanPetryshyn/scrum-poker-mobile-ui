import { Record } from 'immutable';

const User = Record({
  userId: null,
  username: '',
  isHost: false,
});

export default User;
