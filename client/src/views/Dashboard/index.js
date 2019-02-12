/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/** Source imports */
import { configure } from '../../util';
import {
	Header,
	Menu,
	Wing,
	Chart,
	Table,
	Image
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
				<Chart />
				<Table />
				<Image />
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
