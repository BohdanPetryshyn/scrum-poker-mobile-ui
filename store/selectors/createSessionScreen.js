import { createSelector } from 'reselect';

export const getCreateSessionScreenState = state =>
  state.get('createSessionScreen');

export const getFieldValue = fieldName =>
  createSelector(getCreateSessionScreenState, createSessionScreenState =>
    createSessionScreenState.get(fieldName)
  );