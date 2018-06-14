import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Observable, ajax } from '../../config/rxjs';

import { rootEpic } from '../modules';

import { isProduction, apiUrl } from '../../config/constants';

const defaultMiddlewares = [
  createEpicMiddleware(rootEpic, { dependencies: { Observable, ajax, apiUrl } }),
];

export default function configureMiddlewares() {
  const middlewares = applyMiddleware(...[
    ...defaultMiddlewares,
  ]);

  return isProduction ? middlewares : composeWithDevTools(middlewares);
}
