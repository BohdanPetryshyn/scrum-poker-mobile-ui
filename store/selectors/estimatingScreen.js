import { createSelector } from 'reselect';

export const getEstimatingScreenState = state => state.get('estimatingScreen');

export const getVotingFinishTime = createSelector(
  getEstimatingScreenState,
  state => state.get('votingFinishTime')
);

export const getStory = createSelector(getEstimatingScreenState, state =>
  state.get('story')
);

export const getStoryId = createSelector(getStory, story =>
  story.get('storyId')
);

export const getStorySummary = createSelector(getStory, story =>
  story.get('summary')
);

export const getStoryDescription = createSelector(getStory, story =>
  story.get('description')
);

export const getEstimate = createSelector(getEstimatingScreenState, state =>
  state.get('estimate')
);
