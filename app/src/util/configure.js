/* Library imports */
import { withStyles } from '@material-ui/core';

/* Configure definition */
const configure = ({ styles }) => (component) => (
	withStyles(styles)(
		component
));

/* Module exports */
export default configure;
