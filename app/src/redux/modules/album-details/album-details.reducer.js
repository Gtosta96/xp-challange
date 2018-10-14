import { ofType } from 'redux-observable';

import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, catchError } from 'rxjs/operators';

const CLEAR = 'xp-challange-frontend/album-details/CLEAR';

const HTTP_GET_ALBUM = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM';
const HTTP_GET_ALBUM_SUCCESS = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM_SUCCESS';
const HTTP_GET_ALBUM_FAIL = 'xp-challange-frontend/album-details/HTTP_GET_ALBUM_FAIL';

const initialState = {
  album: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR:
      return initialState;

    case HTTP_GET_ALBUM:
      return {
        ...state,
        query: action.payload,
      };

    case HTTP_GET_ALBUM_SUCCESS:
      return {
        ...state,
        album: action.payload,
      };

    case HTTP_GET_ALBUM_FAIL:
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
  return ({ type: HTTP_GET_ALBUM, payload });
}

export function searchSuccess(payload) {
  return ({ type: HTTP_GET_ALBUM_SUCCESS, payload });
}

export function searchFail(payload) {
  return ({ type: HTTP_GET_ALBUM_FAIL, payload });
}

export function albumDetailsEpic(action$, state, { ajax, apiUrl }) {
  return action$.pipe(
    ofType(HTTP_GET_ALBUM),
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
