import { createStore } from 'redux';

import rootReducer from './modules';
import configureMiddlewares from './middlewares';

const middlewares = configureMiddlewares();
const store = createStore(rootReducer, middlewares);

export default function configureStore() {
  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(window.require('./modules'));
    });
  }

  return store;
}
