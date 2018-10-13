import { ofType } from 'redux-observable';

import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, catchError } from 'rxjs/operators';

const CLEAR = 'xp-challange-frontend/album-details/CLEAR';

const HTTP_SEARCH = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM';
const HTTP_SEARCH_SUCCESS = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM_SUCCESS';
const HTTP_SEARCH_FAIL = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM_FAIL';

const initialState = {
  album: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR:
      return initialState;

    case HTTP_SEARCH:
      return {
        ...state,
        query: action.payload,
      };

    case HTTP_SEARCH_SUCCESS:
      return {
        ...state,
        album: action.payload,
      };

    case HTTP_SEARCH_FAIL:
      return {
        ...state,
        album: initialState.album,
      };

    default:
      return state;
  }
}

/*
* Actions / Epics
*/
export function clear() {
  return ({ type: CLEAR });
}

export function search(payload) {
  return ({ type: HTTP_SEARCH, payload });
}

export function searchSuccess(payload) {
  return ({ type: HTTP_SEARCH_SUCCESS, payload });
}

export function searchFail(payload) {
  return ({ type: HTTP_SEARCH_FAIL, payload });
}

export function albumDetailsEpic(action$, state, { ajax, apiUrl }) {
  return action$.pipe(
    ofType(HTTP_SEARCH),
    debounceTime(1000),
    distinctUntilChanged(),
    mergeMap((action) => (
      ajax.getJSON(`${apiUrl.albums}/${action.payload}`, { Authorization: `Bearer ${state.value.authorization.accessToken}` })
    ).pipe(
      map((response) => searchSuccess(response)),
      catchError((error) => of(searchFail(error.response)),
      )),
    ),
  );
}
