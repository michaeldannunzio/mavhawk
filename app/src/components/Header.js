import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../assets/logo.png';

const style = {
	AppBar: {
		position: 'static',
	},
	img: {
    marginLeft: 'auto',
		marginRight: 'auto',
	}
}

const Header = () => {
	return (
		<div>
    	<AppBar style={style.AppBar}>
      	<Toolbar>
					<img src={logo} alt='MavHawk' style={style.img}/>
      	</Toolbar>
    	</AppBar>
  	</div>
	);
}

export default Header;
