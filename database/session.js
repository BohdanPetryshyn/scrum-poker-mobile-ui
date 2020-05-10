const CREATE_SESSION = `INSERT OR REPLACE INTO session VALUES(?, ?) ON DUPLICATE KEY UPDATE `;

export const createSessionWithDb = db => (sessionId, sessionTopic) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx => tx.executeSql(CREATE_SESSION, [sessionId, sessionTopic]),
      reject,
      resolve
    )
  );
