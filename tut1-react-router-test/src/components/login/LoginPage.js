import React from 'react'

class LoginPage extends React.Component {

	render() {
		return  ( 
		<div > Login: <br/>
			<input name="username" placeholder="User Name"/>
			<input type="password" name="password" placeholder="Password"/>
		 </div> 
		);
	}
}

export default LoginPage