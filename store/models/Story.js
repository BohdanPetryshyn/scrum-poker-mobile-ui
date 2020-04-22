import { Record } from 'immutable';

const Story = Record({
  storyId: '',
  summary: '',
  description: false,
  estimate: null,
});

export default Story;
