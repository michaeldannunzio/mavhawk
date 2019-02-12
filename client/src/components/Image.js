/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from './configure';

/* Component styles */
const styles = (theme) => ({});

/* Component definition */
const Image  = (props) => {
	const { name, src, alt } = props;
	return (
		<img className={name} src={src} alt={alt} />
	);
}

/* Component prop-types */
Image.propTypes = {
	image: PropTypes.object.isRequired,
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
export default configure(options)(Image);
