import { Record, List } from 'immutable';

const CardSchema = Record({
  name: '',
  display: '',
  estimates: List(),
});

export default CardSchema;
