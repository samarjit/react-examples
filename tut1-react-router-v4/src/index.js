import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {
    Router,
    HashRouter,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
  } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

let history = createHashHistory();

let LoginPage = () => {
  return (<div ><h2>Login Page</h2>Login Page body</div>)
}

let HomePage = () => {
  return (<div ><h2>Home Page</h2> Homepage body </div>)
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

         

         <Router  history={history}  >
            <div> Menu: 
            <Link to="/login" exact component={LoginPage} >Login</Link> |&nbsp;
            <Link to="/" exact component={HomePage} >Home</Link>
            <Switch>
              <Route exact path="/" component = {HomePage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
            </div>
         </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
