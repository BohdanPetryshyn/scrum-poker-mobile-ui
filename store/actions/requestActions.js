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

export const CREATE_SESSION_ACTION_TYPES = createRequestActionTypes(
  'CREATE_SESSION'
);

export const JOIN_SESSION_ACTION_TYPES = createRequestActionTypes(
  'JOIN_SESSION'
);

export const fetchCardSchemas = () => ({
  types: getTypes(FETCH_CARD_SCHEMAS_ACTION_TYPES),
  payload: {
    request: {
      url: '/card-schema',
    },
  },
});

export const createSession = (topic, cardSchema, username) => ({
  types: getTypes(CREATE_SESSION_ACTION_TYPES),
  payload: {
    username,
    request: {
      url: '/poker-session',
      method: 'POST',
      data: {
        topic,
        cardSchema,
      },
    },
  },
});

export const getSession = (sessionId, username) => ({
  types: getTypes(JOIN_SESSION_ACTION_TYPES),
  payload: {
    username,
    request: {
      url: `/poker-session/${sessionId}`,
    },
  },
});
