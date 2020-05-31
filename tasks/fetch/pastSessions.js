import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import {
  createStories,
  createVotingResults,
  getRecentSessionIds,
} from '../../database';
import httpClient from '../../api/httpClient';

const TASK_NAME = 'FETCH_PAST_SESSIONS';
const TASK_INTERVAL = 60;

const updateSessions = async sessions => {
  const stories = sessions
    .flatMap(session => session.votings)
    .map(voting => voting.story)
    .map(story => ({ id: story.id, summary: story.summary }));
  await createStories(stories);

  const votingResults = sessions.flatMap(session =>
    session.votings.map(voting => ({
      sessionId: session.sessionId,
      storyId: voting.story.storyId,
      resultCard: voting.resultCard,
    }))
  );
  await createVotingResults(votingResults);
};

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    const sessionIdsToUpdate = await getRecentSessionIds();
    const sessionsToUpdate = await httpClient.get(`/poker-sessions`, {
      params: { sessionIds: sessionIdsToUpdate },
    });
    await updateSessions(sessionsToUpdate);
    return BackgroundFetch.Result.NewData;
  } catch (error) {
    return BackgroundFetch.Result.Failed;
  }
});

const taskOptions = {
  minimumInterval: TASK_INTERVAL,
};

export default async () => {
  await BackgroundFetch.registerTaskAsync(TASK_NAME, taskOptions);
  await BackgroundFetch.setMinimumIntervalAsync(TASK_INTERVAL);
};
