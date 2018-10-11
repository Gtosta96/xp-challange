import React from 'react';
import ReactDOM from 'react-dom';

import Root from './src/Root';

const render = (RootComponent) => {
  ReactDOM.render(React.createElement(RootComponent), document.getElementById('app'));
};

render(Root);

if (module.hot) {
  module.hot.accept('./src/Root', () => {
    render(window.require('./src/Root'));
  });
}
