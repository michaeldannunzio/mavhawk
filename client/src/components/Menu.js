/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	Drawer,
} from '@material-ui/core';

/* Source imports */
import { configure } from '../util';

/* Menu styles */
const styles = (theme) => ({
	menu: {},
});

/* Menu definition */
class Menu extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.menu}></div>
		);
	}
}

/* Menu prop-types */
Menu.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Menu actions */
const actions = {};

/* Menu configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Menu);
