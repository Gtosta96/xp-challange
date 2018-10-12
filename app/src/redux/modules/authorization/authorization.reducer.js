const SAVE_AUTHORIZATION_DATA = 'xp-challange-frontend/authorization/SAVE_AUTHORIZATION_DATA';

const initialState = {
  accessToken: null,
  tokenType: null,
  expiresIn: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@@INIT':
      return {
        ...state,
        ...JSON.parse(localStorage.getItem('authorization')), // TODO: fix it...
      };

    case SAVE_AUTHORIZATION_DATA: {
      const newState = {
        ...state,
        accessToken: action.payload.access_token,
        tokenType: action.payload.token_type,
        expiresIn: action.payload.expires_in,
      };

      localStorage.setItem('authorization', JSON.stringify(newState));
      return newState;
    }

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
