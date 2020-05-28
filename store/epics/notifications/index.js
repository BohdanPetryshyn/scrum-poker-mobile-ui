import { combineEpics } from 'redux-observable';

import votingStarted from './votingStarted';

export default combineEpics(votingStarted);
