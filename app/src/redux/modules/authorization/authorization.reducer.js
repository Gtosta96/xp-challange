const SAVE_AUTHORIZATION_DATA = 'xp-challange-frontend/authorization/SAVE_AUTHORIZATION_DATA';

const initialState = {
  accessToken: null,
  tokenType: null,
  expires_in: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AUTHORIZATION_DATA:
      return {
        ...state,
        accessToken: action.payload.access_token,
        tokenType: action.payload.token_type,
        expiresIn: action.payload.expires_in,
      };

    default:
      return state;
  }
}

/*
* Actions / Epics
*/
export function saveAuthorizationData(payload) {
  return ({ type: SAVE_AUTHORIZATION_DATA, payload });
}
