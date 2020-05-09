# Basic Redux

The basics of redux is simple store where you can store some data, listen for data changes. 

* You create a store
* You subscribe to a store to listen for changes
* Reducer is a function to mutate states and set in store. You can write different mutations for different event/action types

```
import {createStore} from 'redux';

let store = createStore(reducer, 1);

store.subscribe( ()=> { console.log(store.getState())});

let reducer = function(state = {count: 1}, action){
  switch(action.type) {
    case "INC": return {...state, count: state.count+action.payload }
  }
}

store.dispatch({type: "INC",payload: 1})
store.dispatch({type: "INC",payload: 2})
```

Live example: https://stackblitz.com/edit/react-ygkgj7
