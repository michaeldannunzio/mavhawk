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

/* Header styles */
const styles = (theme) => ({
	header: {},
	appbar: {},
	toolbar: {},
	button: {},
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
	const { classes, toggleMenu } = props;

	return (
		<div className={classes.header}>
			<AppBar className={classes.appbar}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						className={classes.button}
						onClick={toggleMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.typography}>
						Dashboard
					</Typography>
					<img className={classes.logo} src={logo} alt='mavhawk logo' />
				</Toolbar>
			</AppBar>
		</div>
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
