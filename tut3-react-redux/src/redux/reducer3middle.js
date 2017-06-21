import {applyMiddleware, createStore} from 'redux';
import reduxLogger from 'redux-logger'
const reducer = function(state, action){
	if(action.type == "INC") {
		return state + action.payload
	}
	else if(action.type == "DEC") {
		return state - action.payload
	}
	else if(action.type == "E"){
		console.log("Error")
		throw new Error("Intentional error created!");
	}
	return state;
}

//Middlewares intercepts every event of action before action is fired
const logger = (store) => (next) => (action) => {
	console.log("action middleware fired", action);
	// action.type = "DEC";      //override acions while demo error , comment this line
	next(action);                                       //comment to show action chain
}

//Error logs
const error = (store) => (next) => (action) => {
	try {
		console.log("error mmiddle ware fired")
		next(action)
	} catch (e){
		console.log("Error message!",e);
	}
}
const middlewares = applyMiddleware(logger, error, reduxLogger);

const store = createStore(reducer, 0, middlewares);
store.subscribe( function(){
	console.log("store changed", store.getState())
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "E", payload: 2});

export default store;