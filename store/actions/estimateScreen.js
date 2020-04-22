import { getStoryId } from '../selectors/estimatingScreen';
import { estimateStory } from './socketActions';

export const estimateStoryFromStore = estimate => (dispatch, getState) => {
  const state = getState();
  const storyId = getStoryId(state);

  dispatch(estimateStory(estimate, storyId));
};
