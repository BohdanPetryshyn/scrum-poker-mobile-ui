import { getSelectedEstimate } from '../selectors/resultScreen';
import { setVotingResult } from './socketActions';

export const RESULT_SCREEN_ACTION_TYPES = {
  SET_FIELD_VALUE: 'SET_RESULT_SCREEN_FIELD_VALUE',
};

export const setFieldValue = (filedName, value) => ({
  type: RESULT_SCREEN_ACTION_TYPES.SET_FIELD_VALUE,
  payload: {
    filedName,
    value,
  },
});

export const submitResultEstimateFromStore = () => (dispatch, getState) => {
  const state = getState();
  const selectedEstimate = getSelectedEstimate(state);

  return dispatch(setVotingResult(selectedEstimate));
};
