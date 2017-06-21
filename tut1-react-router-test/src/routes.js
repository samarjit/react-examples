import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './app'
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'

export default (
    <Route    path="/" component={App} >
        <IndexRoute component = {HomePage} />
        <Route path="login" component={LoginPage} />
    </Route>
)