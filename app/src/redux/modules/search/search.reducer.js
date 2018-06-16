const HTTP_SEARCH = 'xp-challange-frontend/search/HTTP_SEARCH';
const HTTP_SEARCH_SUCCESS = 'xp-challange-frontend/search/HTTP_SEARCH_SUCCESS';
const HTTP_SEARCH_FAIL = 'xp-challange-frontend/search/HTTP_SEARCH_FAIL';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HTTP_SEARCH_SUCCESS:
      return {
        ...state,
      };

    case HTTP_SEARCH_FAIL:
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
export function search(payload) {
  return ({ type: HTTP_SEARCH, payload });
}

export function searchSuccess(payload) {
  return ({ type: HTTP_SEARCH_SUCCESS, payload });
}

export function searchFail(payload) {
  return ({ type: HTTP_SEARCH_FAIL, payload });
}

export function searchEpic(action$, { getState }, { Observable, apiUrl }) {
  return action$.ofType(HTTP_SEARCH)
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((action) => Observable.fromPromise(
      fetch(`${apiUrl.search}?q=${action.payload}&type=album`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${getState().authorization.accessToken}` },
      })
        .then((response) => response.json()),
    )
      .map((response) => searchSuccess(response))
      .catch((error) => Observable.of(searchFail(error.response))),
    );
}
