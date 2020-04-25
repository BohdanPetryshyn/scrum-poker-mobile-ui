import { estimateStory } from './socketActions';
import { getVotingStoryId } from '../selectors/session';

export const estimateStoryFromStore = estimate => (dispatch, getState) => {
  const state = getState();
  const storyId = getVotingStoryId(state);

  dispatch(estimateStory(estimate, storyId));
};
