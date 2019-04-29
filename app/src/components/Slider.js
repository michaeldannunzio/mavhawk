/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Slider as MuiSlider } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import axios from 'axios';

/* Source imports */
import { configure } from '../util';


/* Component definition */
class Slider extends React.Component {
	state = {
    value: 0,
	};
	
	componentDidMount() {
		// const path = `/voltage_control/${this.props.id}`
		// axios.post(path, {
		// 	voltage: this.state.value
		// });
	}
	
  handleChange = (event, value) => {
		const path = `/voltage_control/${this.props.id}`
		axios.post(path, {
			voltage: value
		});

		this.setState({ value });
  };

  render() {
    const { classes } = this.props;
		const { value } = this.state;
		const label = `Cell ${this.props.id}`

    return (
      <div className={classes.root}>
				<center>
					<Typography className={classes.label} id="label">
						<b>{label}</b>: {Math.round(this.state.value * 100) / 100} kV
					</Typography>
				</center>
        <MuiSlider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={8}
          step={0.1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

/* Component prop-types */
Slider.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	root: {
		marginLeft: theme.spacing.unit * 6,
		width: 300,
	},
	label: {},
	slider: {
		padding: '22px 0px',
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
export default configure(options)(Slider);
