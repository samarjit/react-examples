import React from 'react'
import {Route} from 'react-router'
import NavigationBar from './components/navbar/NavigationBar'

class App extends React.Component {

	render() {
		return  (
		
		 <div className="container">
			 <NavigationBar/>
		     {this.props.children}
		 </div> 
		
		);
	}
}

export default App