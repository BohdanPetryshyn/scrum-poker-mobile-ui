import { createSelector } from 'reselect';
import { isNil } from 'lodash';

import Estimate from '../models/Estimate';

export const getSessionState = state => state.get('session');

export const getSessionId = createSelector(getSessionState, sessionState =>
  sessionState.get('sessionId')
);

export const getIsSessionStarted = createSelector(
  getSessionId,
  sessionId => !isNil(sessionId)
);

export const getSessionStage = createSelector(getSessionState, sessionState =>
  sessionState.get('stage')
);

export const getSessionCardSchema = createSelector(
  getSessionState,
  sessionState => sessionState.get('cardSchema')
);

export const getSessionAvailableEstimates = createSelector(
  getSessionCardSchema,
  cardSchema => cardSchema.get('estimates')
);

export const getUsers = createSelector(getSessionState, sessionState =>
  sessionState.get('users')
);

export const getVotings = createSelector(getSessionState, sessionState =>
  sessionState.get('votings')
);

export const getVotingResults = createSelector(getVotings, votings =>
  votings.map(voting => ({
    votingId: voting.get('votingId'),
    storySummary: voting.getIn(['story', 'summary']),
    resultCard: voting.get('resultCard'),
  }))
);

export const getCurrentVoting = createSelector(getSessionState, sessionState =>
  sessionState.get('currentVoting')
);

export const getVotingStory = createSelector(getCurrentVoting, voting =>
  voting.get('story')
);

export const getVotingStoryId = createSelector(getVotingStory, story =>
  story.get('storyId')
);

export const getVotingStorySummary = createSelector(getVotingStory, story => {
  return story.get('summary');
});

export const getVotingStoryDescription = createSelector(getVotingStory, story =>
  story.get('description')
);

export const getVotingFinishTime = createSelector(getCurrentVoting, voting => {
  return voting.get('finishTime');
});

export const getVotingEstimates = createSelector(getCurrentVoting, voting =>
  voting.get('estimates')
);

export const getAverageEstimate = createSelector(
  getVotingEstimates,
  estimates => {
    const sum = estimates.reduce((acc, estimate) => acc + estimate, 0);
    return sum / estimates.size;
  }
);

export const getUserCards = createSelector(getVotingEstimates, estimates =>
  estimates
    .groupBy(estimate => estimate.user.userId)
    .map(estimate => estimate.getIn([0, 'card']))
);

export const getUserEstimates = createSelector(
  [getUsers, getUserCards],
  (users, userCards) =>
    users.map(
      user =>
        new Estimate({
          user,
          card: userCards.get(user.userId),
        })
    )
);
