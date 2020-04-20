import { createSelector } from 'reselect';

export const getCreateSessionScreenState = state =>
  state.get('createSessionScreen');

export const getUsername = createSelector(
  getCreateSessionScreenState,
  createSessionScreenState => createSessionScreenState.get('username')
);

export const getTopic = createSelector(
  getCreateSessionScreenState,
  createSessionScreenState => createSessionScreenState.get('topic')
);

export const getCardSchema = createSelector(
  getCreateSessionScreenState,
  createSessionScreenState => createSessionScreenState.get('cardSchema')
);

export const getCardSchemas = createSelector(
  getCreateSessionScreenState,
  createSessionScreenState => createSessionScreenState.get('cardSchemas')
);

export const getIsFormFilled = createSelector(
  [getUsername, getTopic, getCardSchema],
  (username, topic, cardSchema) => !!(username && topic && cardSchema)
);
