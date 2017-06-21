import React from 'react'
import {Router, hashHistory} from 'react-router'
import routes from './routes'
import App from './app'


class Layout extends React.Component {

    render(){
        return (
            <Router history = {hashHistory} routes = {routes} >
            </Router>
        )
    }
}

export default Layout