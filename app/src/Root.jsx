import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import configureStore from './redux/configureStore';

import LoginContainer from './core/login/LoginContainer';
import HomeContainer from './core/home/HomeContainer';

import './styles/index.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/home" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(Root);
