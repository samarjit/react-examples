import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import store from './redux/reducer5react'

import {Provider} from 'react-redux'

const render = (Component) => {
  ReactDOM.render(
  	<Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  });
}