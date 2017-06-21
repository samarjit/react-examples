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
import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {ConnectedRouter,routerReducer, routerMiddleware, push} from 'react-router-redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

let reducers = function(state={count:1},action){
  switch(action.type) {
    case "INC": 
      console.log('called', state.count)
    return {...state, count: state.count+action.payload }; break;
    default: return state;
  }
}

const reducer = combineReducers({
      reducers, // your reducers here
      routerReducer,
});

let history = createHashHistory();
let store = createStore(reducer, 1, compose(applyMiddleware(routerMiddleware(history),thunk, logger) ) )

store.subscribe( ()=> { console.log("Global store",store.getState())});
store.dispatch({type: "INC",payload: 1})
store.dispatch({type: "INC",payload: 1})

//Now the increment is happening through redux and both components LoginPage and Rendering page
//HomePage does not know about each other. pub-sub in action ie. redux.

class Login extends React.Component{
  constructor(props){
    super(props);
  }
  navigateToHome(e){
    this.props.dispatch(push("/")) //This push is working via react-redux-router
    //The state is path is pushed to redux and redux is doing the path change
  }
  render() {
   return (<div >
    <h2>Login Page</h2>
   Login Page body
   <button onClick={(e)=>this.props.dispatch({type:'INC',payload: 3})}>Increment</button>
   <button onClick={(e)=>this.navigateToHome(e)}>Home</button>
   </div>)
  }
}

let mapStateToProps = (state)=>{
  const {routerReducer,reducer}
  return {

  }
}
const LoginPage = connect()(Login)

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

  login(e){
    console.log(e.target)
    history.push("/login")
  }
  home(e){
    console.log(e.target)
    history.push("/")
  }
  render() {
    return (
      <Provider store={store}>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

         <button onClick={(e)=>this.login(e)}>Login</button>
         <button onClick={(e)=>this.home(e)}>Home</button>

         <Router  history={history}  >
            <div>
            <Link to="/" exact component={HomePage} />
            <Link to="/login" exact component={LoginPage} />
            <Switch>
              <Route exact path="/" component = {HomePage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
            </div>
         </Router>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
