const CREATE_SESSION = `INSERT OR REPLACE INTO session VALUES(?, ?, ?)`;

const GET_RECENT_SESSION_IDS = `SELECT id FROM session WHERE createdAt <= DATE('now','-2 day')`;

export const createSessionWithDb = db => (sessionId, sessionTopic) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(CREATE_SESSION, [sessionId, sessionTopic, Date.now()]),
      reject,
      resolve
    )
  );

export const getRecentSessionIdsWithDb = db => () =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(GET_RECENT_SESSION_IDS, [], (_, { rows: { _array } }) =>
          resolve(_array)
        ),
      reject
    )
  );
