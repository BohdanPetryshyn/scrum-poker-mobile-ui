import * as SQLite from 'expo-sqlite';

import assertTablesWithDb from './assertTablesWithDb';

const db = SQLite.openDatabase('db.db');

export const assertTables = () => assertTablesWithDb(db);
