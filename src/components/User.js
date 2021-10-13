import React from 'react';
import classes from './User.module.css';

class User extends React.Component{

	componentWillUnmount(){
		console.log('uses will unmount')
	}

	render(){
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
