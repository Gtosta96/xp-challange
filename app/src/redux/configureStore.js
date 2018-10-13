import { createStore } from 'redux';
import { connectRouter } from 'connected-react-router';

import rootReducer from './modules';
import configureMiddlewares, { configureEpicMiddleware } from './middlewares';


export default function configureStore(history) {
  const middlewares = configureMiddlewares(history);

  const store = createStore(
    connectRouter(history)(rootReducer),
    middlewares,
  );

  configureEpicMiddleware();

  // if (module.hot) {
  //   module.hot.accept('./modules', () => {
  //     store.replaceReducer(window.require('./modules'));
  //   });
  // }

  return store;
}
