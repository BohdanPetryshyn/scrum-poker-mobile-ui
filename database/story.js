const CREATE_STORY = `INSERT OR REPLACE INTO story VALUES(?, ?)`;

export const createStoryWithDb = db => (storyId, storySummary) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx => tx.executeSql(CREATE_STORY, [storyId, storySummary]),
      reject,
      resolve
    )
  );
