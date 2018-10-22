import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/logo.png';

const style = {
	img: {
    marginLeft: 'auto',
    marginRight: 'auto',
	}
}

const Navbar = () => {
	return (
		<div>
    	<AppBar position="static">
      	<Toolbar>
					{/* <Typography>
						Dashboard
					</Typography> */}
					<img src={logo} alt='MavHawk' style={style.img}/>
      	</Toolbar>
    	</AppBar>
  	</div>
	);
}

export default Navbar;
