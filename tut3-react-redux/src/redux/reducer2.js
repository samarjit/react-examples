import {combineReducers, createStore} from 'redux';

const userReducer = function(state ={}, action) {
	var stateNew ={};
	switch(action.type){
		case "NAME_CHANGED": //state.name = action.payload;  //change to immutable
			state = Object.assign({}, state,{ name: action.payload})
		break;
		case "AGE_CHANGED": //stateNew = Object.assign({}, state, {age: action.payload});
		 	state = {...state, age: action.payload}
		break;
	    default: break;
	}
	return state;
}

const tweetsReducer = function(state=[], action){
	switch(action.type) {
		 
		case "TWEETS_ADDED": state.push(action.payload) ;
			break;
		case "TWEETS_REMOVED": state.push(action.payload);
			break;
		default: break;
	}
	return state;
}

const reducers = combineReducers({
	user: userReducer, 
	tweets: tweetsReducer
});

const store = createStore(reducers, {
	user: {
		name: '',
		age: 30
	},
	tweets: []
});
store.subscribe( function(){
	console.log("store changed", store.getState())
});

store.dispatch({type: "NAME_CHANGED", payload: 'Samarjit'});
store.dispatch({type: "AGE_CHANGED", payload: 35});
// store.dispatch({type: "DEC", payload: 1});

export default store;