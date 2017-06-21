import React from 'react'
import {Link} from 'react-router'

class NavigationBar extends React.Component {

	render() {
		return  ( 
		<div > Nav Bar 
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link to="/login">Login</Link></li>
			</ul>
		</div> 
		);
	}
}

export default NavigationBar