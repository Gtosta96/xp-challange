import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ajax } from 'rxjs/ajax';
import { rootEpic } from '../modules';

import { isProduction, apiUrl } from '../../config/constants';

const epicMiddleware = createEpicMiddleware({ dependencies: { ajax, apiUrl } });

const defaultMiddlewares = [
  epicMiddleware,
];

export function configureEpicMiddleware() {
  epicMiddleware.run(rootEpic);
}

export default function configureMiddlewares() {
  const middlewares = applyMiddleware(...[
    ...defaultMiddlewares,
  ]);

  return isProduction ? middlewares : composeWithDevTools(middlewares);
}
