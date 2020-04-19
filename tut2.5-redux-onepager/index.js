import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

let reducer = function(state = {count: 1}, action){
  switch(action.type) {
    case "INC": return {...state, count: state.count+action.payload }
  }
}
let store = createStore(reducer, 1)

store.subscribe( ()=> { console.log(store.getState())});


store.dispatch({type: "INC",payload: 1})
store.dispatch({type: "INC",payload: 2})

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
      <Provider store={store}>
        <Hello name={this.state.name} />
         
      </Provider>
      </div>
    );
  }
}

let mapStateToProps = function(state){
  const {count} = state;
  return {
    count
  }
}
const AppHOC = connect(mapStateToProps)(App)
render(<App />, document.getElementById('root'));
