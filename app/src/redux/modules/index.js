import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import authorizationReducer, { authorizationEpic } from './authorization/authorization.reducer';
import searchReducer, { searchEpic } from './search/search.reducer';

export const rootEpic = combineEpics(
  authorizationEpic,
  searchEpic,
);

export default combineReducers({
  authorization: authorizationReducer,
  search: searchReducer,
});
