import React from 'react';
import d3 from 'd3';

const style = {
	circle: {
		fill: 'red',
		cx: 50,
		cy: 50,
		r: 2.5
	}
};

const Point = (props) => {
	return (
		<circle style={style.circle}/>
	);
}

export default Point;
