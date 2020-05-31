const STORY_VALUES_TEMPLATE = `(?, ?)`;
const CREATE_STORY = `INSERT OR REPLACE INTO story VALUES`;

export const createStoryWithDb = db => (storyId, storySummary) =>
  new Promise((resolve, reject) =>
    db.transaction(
      tx =>
        tx.executeSql(CREATE_STORY + STORY_VALUES_TEMPLATE, [
          storyId,
          storySummary,
        ]),
      reject,
      resolve
    )
  );

export const createStoriesWithDb = db => stories => {
  const storiesTemplate = STORY_VALUES_TEMPLATE.repeat(stories.length);
  const storiesArgs = stories.flatMap(story => [story.id, story.summary]);
  return new Promise((resolve, reject) =>
    db.transaction(
      tx => tx.executeSql(CREATE_STORY + storiesTemplate, storiesArgs),
      reject,
      resolve
    )
  );
};
