import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

const userReducer = function(state ={}, action) {
	var stateNew ={};
	switch (action.type) {
		case "FETCH_USERS_PENDING": {
			return {...state, fetching: true};
		}
		break;
		case "FETCH_USERS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
		}
		break;
		case "FETCH_USERS_FULFILLED": {
			return {...state, fetching: false, fetched: true, users: action.payload}
		}
		break;
		case "NAME_CHANGED": {
			return {...state, fetching: true, name: "Samarjit"};
		} 
		break;

		default:

		 console.log("No matched userReducer", action.type);
		break;
	}
	return state;
}

const tweetsReducer = function(state=[], action){
	switch(action.type) {
		 
		case "TWEETS_ADDED": state.push(action.payload) ;
			break;
		case "TWEETS_REMOVED": state.push(action.payload);
			break;

		default: console.log("No matched tweetReducer", action.type);
		break;

	}
	return state;
}

const middlware  = applyMiddleware(promise(), thunk, logger)

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
	console.log("store change", store.getState())
});

// store.dispatch({type: "NAME_CHANGED",payload: axios.get("http://rest.learncode.academy/api/wstern/users")});

// store.dispatch({type: "NAME_CHANGED", payload:  1});

export default store;