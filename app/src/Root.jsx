import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import configureStore from 'app-redux/configureStore';
import configureHistory from 'app-redux/configureHistory';

import LoginContainer from 'app-core/pages/login/LoginContainer';
import SpotifyCallback from 'app-core/pages/spotify-callback/SpotifyCallback';

import SearchContainer from 'app-core/pages/search/SearchContainer';
import AlbumDetailsContainer from 'app-core/pages/album-details/AlbumDetailsContainer';

import Template from 'app-core/templates/Template';

import { paths } from 'app-config/constants';

import './styles/index.css';

const history = configureHistory();
const store = configureStore(history);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Template>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path={`/${paths.spotifyCallback}`} component={SpotifyCallback} />

          <Route path={`/${paths.search}/:query?`} component={SearchContainer} />
          <Route path={`/${paths.album}/:id`} component={AlbumDetailsContainer} />

        </Switch>
      </Template>
    </ConnectedRouter>
  </Provider>
);

export default Root;
