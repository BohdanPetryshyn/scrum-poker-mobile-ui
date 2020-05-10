import { combineEpics } from 'redux-observable';

import saveSession from './saveSession';
import saveStory from './saveStory';

export default combineEpics(saveSession, saveStory);
