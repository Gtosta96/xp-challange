import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { hot } from 'react-hot-loader';

import configureStore from 'app-redux/configureStore';

import LoginContainer from 'app-core/pages/login/LoginContainer';
import SearchContainer from 'app-core/pages/search/SearchContainer';
import AlbumDetailsContainer from 'app-core/pages/album-details/AlbumDetailsContainer';

import './styles/index.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginContainer} />

        <Route path="/home" component={SearchContainer} />
        <Route path="/album/:id" component={AlbumDetailsContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

// export default hot(module)(Root);
export default Root;
