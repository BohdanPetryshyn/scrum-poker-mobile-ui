import { Map } from 'immutable';
import { NOTIFICATIONS_ACTIONS } from '../actions/notifications';

const initialState = Map({
  expoPushToken: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_ACTIONS.TOKEN_RETRIEVED:
      return state.set('expoPushToken', action.payload);
    default:
      return state;
  }
};
