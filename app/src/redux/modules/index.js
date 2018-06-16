import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import authorizationReducer from './authorization/authorization.reducer';
import searchReducer, { searchEpic } from './search/search.reducer';

export const rootEpic = combineEpics(
  searchEpic,
);

export default combineReducers({
  authorization: authorizationReducer,
  search: searchReducer,
});
