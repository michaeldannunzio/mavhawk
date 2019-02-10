/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import configure from '../configure';


/* Component styles */
const styles = (theme) => ({
	table: {},
});

/* Component definition */
class Table extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.table}></div>
		);
	}
}

/* Component prop-types */
Table.propTypes = {
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
export default configure(options)(Table);
