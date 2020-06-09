import { combineEpics } from 'redux-observable';

import saveSession from './saveSession';
import saveStory from './saveStory';
import saveVotingResult from './saveVotingResult';
import notifications from './notifications';
import navigateToSessionWhenJoining from './navigateToSessionWhenJoining';

export default combineEpics(
  saveSession,
  saveStory,
  saveVotingResult,
  notifications,
  navigateToSessionWhenJoining
);
