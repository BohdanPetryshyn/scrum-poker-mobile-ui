import { Map } from 'immutable';

const initialState = Map({
  sessionId: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
