import * as SQLite from 'expo-sqlite';

import assertTablesWithDb from './assertTablesWithDb';
import { createSessionWithDb, getRecentSessionIdsWithDb } from './session';
import { createStoryWithDb, createStoriesWithDb } from './story';
import {
  createVotingResultWithDb,
  createVotingResultsWithDb,
  getAllVotingsWithDb,
} from './votingResult';

const db = SQLite.openDatabase('db.db');

export const assertTables = assertTablesWithDb(db);
export const createSession = createSessionWithDb(db);
export const getRecentSessionIds = getRecentSessionIdsWithDb(db);
export const createStory = createStoryWithDb(db);
export const createStories = createStoriesWithDb(db);
export const createVotingResult = createVotingResultWithDb(db);
export const createVotingResults = createVotingResultsWithDb(db);
export const getAllVotings = getAllVotingsWithDb(db);
