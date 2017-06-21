import React from 'react';
import {connect} from 'react-redux'

class Hello extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {name: 'a'}
  }
  increment(e){
    this.props.dispatch({type:'INC',payload: 2})
  }
  render(){
    const name = this.state;
    return (
      <div>
       {this.props.count}
       <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  const {count} = state.reducers
  return {
    count
  }
}
export default  connect(mapStateToProps)(Hello);