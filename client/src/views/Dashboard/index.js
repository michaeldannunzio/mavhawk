/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import {
	configure,
	Header,
	Menu,
	// Wing,
	Graph,
	Table
} from '../../components';


/* Component styles */
const styles = (theme) => ({
	dashboard: {},
});

/* Component definition */
class Dashboard extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.dashboard}>
				<Header />
				<Menu />
			</div>
		);
	}
}

/* Component prop-types */
Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
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
export default configure(options)(Dashboard);
