const CREATE_VOTING_RESULT = `INSERT INTO votingResult VALUES(?, ?, ?)`;

export const createVotingResultWithDb = db => (
  sessionId,
  storyId,
  resultCard
) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(CREATE_VOTING_RESULT, [sessionId, storyId, resultCard]),
      reject,
      resolve
    )
  );
