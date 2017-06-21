import { computed, autorun, observable} from 'mobx'

class Todo {
	@observable value
	@observable id
	@observable complete

	constructor(value) {
		this.value = value
		this.id = Date.now()
		this.complete = false
	}
}

class TodoStore {
	@observable todos = [];
	@observable filter = '';

	@computed get filteredTodos(){
		var matchesFilter = new RegExp(this.filter, "i")
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
	}
	createTodo(todo){
		this.todos.push(new Todo(todo))
	}
	completeTodo(todo){
	 
	}

	clearCompletedTodos = () => {
		var completedTodos = this.todos.filter( todo => !todo.complete );
		this.todos.replace(completedTodos)
	}
}

var store = window.store = new TodoStore()

export default store;

autorun(()=>{
	console.log('autorun subscriber', store.filter, store.todos[0])
})