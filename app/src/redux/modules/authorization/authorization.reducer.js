const HTTP_GET_AUTHORIZATION = 'xp-challange-frontend/authorization/HTTP_GET_AUTHORIZATION';
const HTTP_GET_AUTHORIZATION_SUCCESS = 'xp-challange-frontend/authorization/HTTP_GET_AUTHORIZATION_SUCCESS';
const HTTP_GET_AUTHORIZATION_FAIL = 'xp-challange-frontend/authorization/HTTP_GET_AUTHORIZATION_FAIL';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HTTP_GET_AUTHORIZATION_SUCCESS:
      return {
        ...state,
      };

    case HTTP_GET_AUTHORIZATION_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}

/*
* Actions / Epics
*/
export function getAuthorization(payload) {
  return ({ type: HTTP_GET_AUTHORIZATION, payload });
}

export function getAuthorizationSuccess(payload) {
  return ({ type: HTTP_GET_AUTHORIZATION_SUCCESS, payload });
}

export function getAuthorizationFail(payload) {
  return ({ type: HTTP_GET_AUTHORIZATION_FAIL, payload });
}

export function authorizationEpic(action$, store, { ajax, Observable, apiUrl }) {
  return action$.ofType(HTTP_GET_AUTHORIZATION)
    .mergeMap(() => ajax.get(`${apiUrl.authorization}?client_id=e1b64e07e993491f9904ac5f44876dfa&response_type=code&redirect_uri=http://localhost:8080/callback`)
      .map((response) => getAuthorizationSuccess(response))
      .catch((error) => Observable.of(getAuthorizationFail(error.response))),
    );
}
