export const CREATE_SESSION_SCREEN_ACTION_TYPES = {
  SET_FIELD_VALUE: 'SET_FIELDS_VALUE',
};

export const setFieldValue = (filedName, value) => ({
  type: CREATE_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE,
  payload: {
    filedName,
    value,
  },
});
