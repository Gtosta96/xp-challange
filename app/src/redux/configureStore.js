import { createStore, applyMiddleware } from 'redux';

import reducer from './modules/index';

const middlewares = [];

export default function configureStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextRootReducer = window.require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
