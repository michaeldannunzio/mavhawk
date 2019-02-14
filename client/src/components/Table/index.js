/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from '../../util';

/* Table styles */
const styles = (theme) => ({
	table: {},
});

/* Table definition */
class Table extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.table}></div>
		);
	}
}

/* Table prop-types */
Table.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Table actions */
const actions = {};

/* Table configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Table);
