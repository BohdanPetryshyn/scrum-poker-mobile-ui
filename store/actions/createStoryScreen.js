import {
  getStoryDescription,
  getStoryName,
} from '../selectors/createStoryScreen';
import { getSessionId } from '../selectors/session';
import { createStory } from './socketActions';

export const CREATE_STORY_SCREEN_ACTION_TYPES = {
  SET_FIELD_VALUE: 'SET_CREATE_STORY_FIELD_VALUE',
};

export const setFieldValue = (fieldName, value) => ({
  type: CREATE_STORY_SCREEN_ACTION_TYPES.SET_FIELD_VALUE,
  payload: {
    fieldName,
    value,
  },
});

export const createStoryFromStore = () => (dispatch, getState) => {
  const state = getState();
  const storyName = getStoryName(state);
  const storyDescription = getStoryDescription(state);
  const sessionId = getSessionId(state);

  dispatch(createStory(storyName, storyDescription, sessionId));
};
