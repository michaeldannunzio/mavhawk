/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/* Source imports */
import { configure } from '../util';
import { logo } from '../assets';
import { toggleMenu } from '../store';

const drawerWidth = 240;

/* Header styles */
const styles = (theme) => ({
	header: {},
	appbar: {
		marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
	},
	toolbar: {},
	button: {
		marginRight: 20,

	},
	typography: {
		display: 'flex'
	},
	logo: {
		margin: '0 auto',
		height: '60px',
	},
});

/* Header definition */
const Header = (props) => {
	const { classes } = props;

	return (
		<AppBar className={classes.appbar}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					className={classes.button}
					onClick={props.toggleMenu}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Typography className={classes.typography} color='inherit' variant='h6'>
					Mavhawk
				</Typography>
				<img className={classes.logo} src={logo} alt='mavhawk logo' />
			</Toolbar>
		</AppBar>
	);
}

/* Header prop-types */
Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Header actions */
const actions = {
	toggleMenu,
};

/* Header configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Header);
