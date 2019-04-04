/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	TextField
} from '@material-ui/core';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';

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
				{/* <TextField
          id="cell"
          label={label}
					className={classes.inputField}
					margin='normal'
          variant="outlined"
        /> */}
				<TextField
          id={this.props.id}
          label={label}
          value={this.props.value}
          // onChange={this.handleChange('value')}
          type="number"
          className={classes.inputField}
          InputLabelProps={{
            shrink: true,
          }}
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
export default configure(options)(Input);
