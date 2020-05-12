import { Record } from 'immutable';

const PastVotingResult = Record({
  sessionId: '',
  storyId: '',
  sessionTopic: '',
  storySummary: '',
  resultCard: '',
});

export default PastVotingResult;
