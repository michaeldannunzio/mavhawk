import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			id: this.props.id,
			style: {
				points: this.props.points,
				fill: this.props.fill,
				stroke: this.props.stroke,
				strokeWidth: 2
			}
		};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onMouseEnter() {
		if (this.state.selected !== true)
			this.setState({
				style: {
					fill: `#${(parseInt(this.state.fill.replace('#', ''), 16) + 13107).toString(16)}`,
					stroke: `#${(parseInt(this.state.fill.replace('#', ''), 16) + 13107).toString(16)}`,
					strokeWidth: (this.state.strokeWidth + 2)
			}});
	}

	onMouseLeave() {
		if (this.state.selected !== true)
		this.setState({
			style: {
				fill: `#${(parseInt(this.state.fill.replace('#', ''), 16) - 13107).toString(16)}`,
				stroke: `#${(parseInt(this.state.fill.replace('#', ''), 16) - 13107).toString(16)}`,
				strokeWidth: (this.state.strokeWidth - 2)
		}});
	}

	onClick() {
		this.setState({
			style: {
				selected: !(this.state.selected),
				fill: `#${(parseInt(this.state.fill.replace('#', ''), 16) - 13107).toString(16)}`,
				stroke: `#${(parseInt(this.state.fill.replace('#', ''), 16) - 13107).toString(16)}`,
				strokeWidth: (this.state.strokeWidth + 2)
		}});
	}

	render() {
		return (
			<polygon style={this.state.style}/>
		);
	}
}

export default Cell;
