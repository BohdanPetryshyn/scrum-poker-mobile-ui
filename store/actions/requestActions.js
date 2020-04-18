const createRequestActionTypes = base => ({
  REQUEST: `${base}_REQUEST`,
  SUCCESS: `${base}_SUCCESS`,
  FAILURE: `${base}_FAILURE`,
});

const getTypes = requestActionTypes => [
  requestActionTypes.REQUEST,
  requestActionTypes.SUCCESS,
  requestActionTypes.FAILURE,
];

export const FETCH_CARD_SCHEMAS_ACTION_TYPES = createRequestActionTypes(
  'FETCH_CARD_SCHEMA'
);

export const fetchCardSchemas = () => ({
  types: getTypes(FETCH_CARD_SCHEMAS_ACTION_TYPES),
  payload: {
    request: {
      url: '/card-schemas',
    },
  },
});
