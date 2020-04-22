import { Record } from 'immutable';

const Story = Record({
  summary: '',
  description: false,
  estimate: null,
});

export default Story;
