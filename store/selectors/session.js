import { createSelector } from 'reselect';
import { isNil } from 'lodash';

const getSessionState = state => state.get('session');

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

export const getCurrentVoting = createSelector(
  getVotings,
  votings => votings && votings.get(0)
);

export const getVotingStory = createSelector(getCurrentVoting, voting =>
  voting.get('story')
);

export const getVotingStoryId = createSelector(getVotingStory, story =>
  story.get('storyId')
);

export const getVotingStorySummary = createSelector(getVotingStory, story => {
  console.log('STORY', story);
  return story.get('summary');
});

export const getVotingStoryDescription = createSelector(getVotingStory, story =>
  story.get('description')
);

export const getVotingFinishTime = createSelector(getCurrentVoting, voting => {
  console.log('VOTING:', voting);
  return voting.get('finishTime');
});

export const getVotingEstimates = createSelector(getCurrentVoting, voting =>
  voting.get('estimates')
);

export const getUserEstimates = createSelector(
  [getUsers, getVotingEstimates],
  (users, estimates) => {
    const userCards = estimates
      .groupBy(estimate => estimate.user.userId)
      .map(estimate => estimate.getIn([0, 'card']));

    return users.map(user => ({
      user,
      card: userCards.get(user.userId),
    }));
  }
);
