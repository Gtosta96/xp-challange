import { ofType } from 'redux-observable';

import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, catchError } from 'rxjs/operators';

const HTTP_SEARCH = 'xp-challange-frontend/search/HTTP_SEARCH';
const HTTP_SEARCH_SUCCESS = 'xp-challange-frontend/search/HTTP_SEARCH_SUCCESS';
const HTTP_SEARCH_FAIL = 'xp-challange-frontend/search/HTTP_SEARCH_FAIL';

const initialState = {
  query: 'Ariana Grande',
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HTTP_SEARCH:
      return {
        ...state,
        query: action.payload,
      };

    case HTTP_SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload.albums.items,
      };

    case HTTP_SEARCH_FAIL:
      return {
        ...state,
        items: initialState.items,
      };

    default:
      return state;
  }
}

/*
* Actions / Epics
*/
export function search(payload) {
  return ({ type: HTTP_SEARCH, payload });
}

export function searchSuccess(payload) {
  return ({ type: HTTP_SEARCH_SUCCESS, payload });
}

export function searchFail(payload) {
  return ({ type: HTTP_SEARCH_FAIL, payload });
}

export function searchEpic(action$, state, { ajax, apiUrl }) {
  return action$.pipe(
    ofType(HTTP_SEARCH),
    debounceTime(1000),
    distinctUntilChanged(),
    mergeMap((action) => (
      ajax.getJSON(`${apiUrl.search}?q=${action.payload}&type=album`, { Authorization: `Bearer ${state.value.authorization.accessToken}` })
    ).pipe(
      map((response) => searchSuccess(response)),
      catchError((error) => of(searchFail(error.response)),
      )),
    ),
  );
}
