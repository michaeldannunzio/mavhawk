/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/** Source imports */
import { configure } from '../../util';
import {
	Header,
	Menu,
	Chart,
	Table,
} from '../../components';

/* Dashboard styles */
const styles = (theme) => ({
	dashboard: {},
});

/* Dashboard definition */
class Dashboard extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.dashboard}>
				<Header />
				<Menu />
				<Chart />
				<Table />
			</div>
		);
	}
}

/* Dashboard prop-types */
Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Dashboard actions */
const actions = {};

/* Dashboard configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Dashboard);
