import { assertTables } from '../../data';

export const DATABASE_ACTIONS = {
  DATABASE_INITIALIZED: 'DATABASE_INITIALIZED',
};

const databaseInitialized = () => ({
  type: DATABASE_ACTIONS.DATABASE_INITIALIZED,
});

export const initDatabase = () => dispatch =>
  assertTables().then(() => dispatch(databaseInitialized()));
