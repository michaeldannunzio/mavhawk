import React from 'react';
import d3 from 'd3';

class Point extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.style = {
			fill: 'red',
			cx: 180,
			cy: 90,
			r: 5
		};
	}

	componentDidMount() {}

	onMouseEnter() {
		this.style.fill = 'red';
	}

	onMouseLeave() {
		this.style.fill = 'blue'
	}

	render() {
		return (
			<circle
				style={this.style}
				onMouseEnter={this.onMouseEnter()}
				onMouseLeave={this.onMouseLeave()}
			/>
		);
	}
}

export default Point;
