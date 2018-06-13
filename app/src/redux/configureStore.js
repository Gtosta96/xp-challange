import { createStore } from 'redux';

import rootReducer from './modules/index';
import configureMiddlewares from './middlewares';

export default function configureStore() {
  const middlewares = configureMiddlewares();

  const store = createStore(
    rootReducer,
    middlewares,
  );

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextRootReducer = window.require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
