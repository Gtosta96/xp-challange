import { compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension';

import { ajax } from 'rxjs/ajax';

import { isProduction, apiUrl } from 'app-config/constants';

import { rootEpic } from '../modules';

const epicMiddleware = createEpicMiddleware({ dependencies: { ajax, apiUrl } });

export default function configureMiddlewares(history) {
  const middlewares = compose(
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware,
    ),
  );

  return isProduction ? middlewares : composeWithDevTools(middlewares);
}

export function configureEpicMiddleware() {
  epicMiddleware.run(rootEpic);
}
