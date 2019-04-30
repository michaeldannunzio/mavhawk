/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	TextField,
} from '@material-ui/core';

/* Source imports */
import { configure } from '../util';


/* Component definition */
class Input extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;
		const label = `Cell ${this.props.id}`;

		return (
			<div className={classes.inputBase}>
				<TextField
          id={this.props.id}
          label={label}
          value={this.props.value}
          onChange={this.props.changeVoltage}
          type="number"
          className={classes.inputField}
          InputLabelProps={{shrink: true}}
          margin="normal"
          variant="outlined"
        />
			</div>
		);
	}
}

/* Component prop-types */
Input.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	inputBase: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
	},
	inputField: {
		marginLeft: theme.spacing.unit * 4,
		marginRight: theme.spacing.unit * 4,
		width: 200,
	},
});

/* Component configurations */
const options = {
	styles,
};

/* Module exports */
export default configure(options)(Input);
