import React from 'react';
import store from './mobx-store'
import {observer} from 'mobx-react'

@observer
export default class App extends React.Component {

  filter(e) {
  	this.props.store.filter = e.target.value
  }

  createTodo (e){
  	if(e.which === 13){
  		this.props.store.createTodo(e.target.value)
  		e.target.value = ""
  	}
  }

  onComplete(todo){
  	todo.complete = !todo.complete
  	// this.props.store.completeTodo(todo)
  }
 
  render () {
  	const {clearCompletedTodos, todos, filter, filteredTodos} = this.props.store;

  	var ListTodos = filteredTodos.map((todo) => {
    		return <li  key={todo.id}><input type="checkbox" value={todo.compelete} checked={todo.complete} onChange={this.onComplete.bind(this, todo)} /> {todo.value} </li>
    	})

    return  <div> 
        Hello React Mobx!
    	<input    onKeyPress={this.createTodo.bind(this)} placeholder="Add Todo"/>
    	<input  value={filter} onChange={this.filter.bind(this)} placeholder="filter"/>
    	<ul>
    		 {ListTodos}
    	</ul>
		<a href="#" onClick={clearCompletedTodos} >Clear todos</a>
    </div>;
  }
}