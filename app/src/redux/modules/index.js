import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import authorizationReducer from './authorization/authorization.reducer';
import searchReducer, { searchEpic } from './search/search.reducer';
import albumDetailsReducer, { albumDetailsEpic } from './album-details/album-details.reducer';

export const rootEpic = combineEpics(
  searchEpic,
  albumDetailsEpic,
);

export default combineReducers({
  authorization: authorizationReducer,
  search: searchReducer,
  albumDetails: albumDetailsReducer,
});
