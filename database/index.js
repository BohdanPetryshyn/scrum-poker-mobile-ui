import * as SQLite from 'expo-sqlite';

import assertTablesWithDb from './assertTablesWithDb';
import { createSessionWithDb } from './session';
import { createStoryWithDb } from './story';
import { createVotingResultWithDb, getAllVotingsWithDb } from './votingResult';

const db = SQLite.openDatabase('db.db');

export const assertTables = assertTablesWithDb(db);
export const createSession = createSessionWithDb(db);
export const createStory = createStoryWithDb(db);
export const createVotingResult = createVotingResultWithDb(db);
export const getAllVotings = getAllVotingsWithDb(db);
