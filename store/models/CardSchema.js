import { Record, List } from 'immutable';

const CardSchema = Record({
  name: '',
  display: '',
  estimates: [],
});

export default CardSchema;
