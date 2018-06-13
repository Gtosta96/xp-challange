import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import configureStore from './redux/configureStore';
import ApplicationContainer from './core/ApplicationContainer';

import './styles/index.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>
);

export default hot(module)(Root);
