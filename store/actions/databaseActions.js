import * as Database from '../../database';

export const DATABASE_ACTIONS = {
  DATABASE_INITIALIZED: 'DATABASE_INITIALIZED',
  SESSION_CREATED: 'SESSION_DATABASE_RECORD_CREATED',
  STORY_CREATED: 'STORY_DATABASE_RECORD_CREATED',
  VOTING_RESULT_CREATED: 'VOTING_RESULT_DATABASE_RECORD_CREATED',
};

const databaseInitialized = () => ({
  type: DATABASE_ACTIONS.DATABASE_INITIALIZED,
});

const sessionCreated = () => ({
  type: DATABASE_ACTIONS.SESSION_CREATED,
});

const storyCreated = () => ({
  type: DATABASE_ACTIONS.STORY_CREATED,
});

const votingResultCreated = () => ({
  type: DATABASE_ACTIONS.VOTING_RESULT_CREATED,
});

export const initDatabase = () => dispatch =>
  Database.assertTables().then(() => dispatch(databaseInitialized()));

export const createSession = (sessionId, sessionTopic) => dispatch =>
  Database.createSession(sessionId, sessionTopic).then(() =>
    dispatch(sessionCreated())
  );

export const createStory = (storyId, storySummary) => dispatch =>
  Database.createStory(storyId, storySummary).then(() =>
    dispatch(storyCreated())
  );

export const createVotingResult = (
  sessionId,
  storyId,
  resultCard
) => dispatch =>
  Database.createVotingResult(sessionId, storyId, resultCard).then(() =>
    dispatch(votingResultCreated())
  );
