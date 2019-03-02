/* Library imports */
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

/* Configure definition */
const configure = ({ styles, store, actions }) => (component) => (
	withStyles(styles)(
		connect(store, actions)(
			component
)));

/* Module exports */
export default configure;
