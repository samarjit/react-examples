import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'


import Layout from './layout'

import routes from './routes'

 
const render = (Component) => {
  ReactDOM.render(
      <Layout/>
   ,
   document.getElementById('app')
  );
};

render(Layout);

if (module.hot) {
  module.hot.accept('./layout', () => {
    render(Layout)
  });
}