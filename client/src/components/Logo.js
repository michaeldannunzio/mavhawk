/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { logo } from '../assets';


/* Component definition */
const Logo = (props) => {
	const { classes } = props;

	return (
			<img className={classes.logo} src={logo} alt='mavhawk logo' />
	);
}

/* Component props */
Logo.propTypes = {
	classes: PropTypes.object.isRequired,
};


/* Module exports */
export default Logo;
