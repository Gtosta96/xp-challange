import { createStore } from 'redux';

import rootReducer from './modules';
import configureMiddlewares, { configureEpicMiddleware } from './middlewares';

export default function configureStore() {
  const middlewares = configureMiddlewares();
  const store = createStore(rootReducer, middlewares);

  configureEpicMiddleware();

  // if (module.hot) {
  //   module.hot.accept('./modules', () => {
  //     store.replaceReducer(window.require('./modules'));
  //   });
  // }

  return store;
}
