import React,{PropTypes} from 'react';
import store from './redux/reducer5react'
import {connect} from 'react-redux'
import axios from 'axios'

@connect((store)=>{
 return {
 	user : store.user,
  tweets: store.tweets
 }
})


export default class App extends React.Component {
  
  componentWillMount(){
    this.props.dispatch({type: "NAME_CHANGED", payload:  1})
  }
  addTodo(){
  	store.dispatch({type: "INC", payload: 1});
  	console.log("adding todos");
  }

  render () {
  	// const { value, onIncreaseClick } = this.props
    console.log('printing props:',this.props);
    const {user, tweets} = this.props;
    return (
     <p> Hello React ! 
     <span>{user.name}</span>
     <input name="todo" />
     <button onClick={()=>{this.addTodo("adding to")}}>Dispatch Action</button>
     
     </p>
     );
     
  }
}

// <button onClick={()=>onIncreaseClick()}>Name Change Action</button>
// App.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch({type: "NAME_CHANGED",
//            payload: axios.get("http://rest.learncode.academy/api/wstern/users")})
//   }
// }

// // Connected Component
// const Dap = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

// export default Dap