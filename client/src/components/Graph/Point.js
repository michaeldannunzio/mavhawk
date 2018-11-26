import React from 'react';

class Point extends React.Component {
	constructor(props) {
		super(props);

		// Alias for style
		this.state = {
			fill: 'blue',
			cx: 180,
			cy: 90,
			r: 5
		};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onMouseEnter() {
		this.setState({
			fill: 'red',
			r: 6
		});
	}

	onMouseLeave() {
		this.setState({
			fill: 'blue',
			r: 4
		});
	}

	onClick() {
		alert('you\'ve been hacked');
	}

	render() {
		return (
			<circle
				style={this.state}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				onClick={this.onClick}
			/>
		);
	}
}

export default Point;
