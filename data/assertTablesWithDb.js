const CREATE_SESSION_TABLE = `
  CREATE TABLE IF NOT EXISTS session (
    id VARCHAR(24) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
  );
`;

const CREATE_STORY_TABLE = `
  CREATE TABLE IF NOT EXISTS story (
    id VARCHAR(24) NOT NULL,
    summary VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
  );
`;

const CREATE_VOTING_RESULT_TABLE = `
  CREATE TABLE IF NOT EXISTS votingResult (
      sessionId VARCHAR(24) NOT NULL,
      storyId VARCHAR(24) NOT NULL,
      resultCard VARCHAR(100) NOT NULL,
      PRIMARY KEY(sessionId, storyId),
      FOREIGN KEY(sessionId) REFERENCES session(id),
      FOREIGN KEY(storyId) REFERENCES story(id)
  );
`;

export default db =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx => {
        tx.executeSql(CREATE_SESSION_TABLE, [], tx1 =>
          tx1.executeSql(CREATE_STORY_TABLE, [], tx2 =>
            tx2.executeSql(CREATE_VOTING_RESULT_TABLE, [])
          )
        );
      },
      reject,
      resolve
    )
  );
