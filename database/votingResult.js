const CREATE_VOTING_RESULT = `INSERT INTO votingResult VALUES(?, ?, ?, ?)`;
const GET_VOTINGS_POPULATED = `
  SELECT
    session.id as sessionId,
    story.id as storyId,
    session.topic as sessionTopic, 
    story.summary as storySummary,
    votingResult.resultCard
  FROM session
  LEFT JOIN votingResult ON votingResult.sessionId = session.id
  LEFT JOIN story ON story.id = votingResult.storyId
  ORDER BY session.createdAt DESC, votingResult.createdAt DESC;
`;

export const createVotingResultWithDb = db => (
  sessionId,
  storyId,
  resultCard
) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(CREATE_VOTING_RESULT, [
          sessionId,
          storyId,
          resultCard,
          Date.now(),
        ]),
      reject,
      resolve
    )
  );

export const getAllVotingsWithDb = db => () =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(GET_VOTINGS_POPULATED, [], (_, { rows: { _array } }) =>
          resolve(_array)
        ),
      reject
    )
  );
