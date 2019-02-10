/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/* Source imports */
import configure from './configure';
import Logo from './Logo';


/* Component styles */
const styles = (theme) => ({
	header: {},
	appbar: {
		position: 'position',
	},
	toolbar: {
		display: 'flex',
	},
	logo: {
    marginLeft: 'auto',
		marginRight: 'auto',
		height: '80px',
		width: '80px',
		alignItems: 'center',
	},
	menuButton: {},
	title: {},
});

/* Component definition */
class Header extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.header}>
				<AppBar className={classes.appbar}>
					<Toolbar className={classes.toolbar}>
						<IconButton
							className={classes.menuButton}
							color='inherit'
							aria-label='Open drawer'
							onClick={this.props.ToggleMenu}
						>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title} variant='h6' color='inherit' noWrap>
							Dashboard
						</Typography>
							<Logo className={classes.logo} classes={classes} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

/* Component prop-types */
Header.propTypes = {
	classes: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

/* Map state to props */
const store = (state, props) => ({});

/* Component actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Header);
