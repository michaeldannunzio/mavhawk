/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Image definition */
const Image = (props) => {
	const { className, src, alt } = props;

	return (
		<img className={className} src={src} alt={alt} />
	);
}

/* Image prop-types */
Image.propTypes = {
	className: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

/* Module exports */
export default Image;
