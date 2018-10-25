import React from 'react';

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			id: this.props.shape.id,
			location: {
				points: this.props.location.points,
				coords: this.props.location.coords
			},
			style: {
				fill: this.props.shape.fill,
				stroke: this.props.shape.stroke,
				strokeWidth: 4
			}
			
		};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	componentWillReceiveProps(props) {
		this.setState({
			id: props.shape.id,
			location: {
				points: props.location.points,
				coords: props.location.coords
			},
			style: {
				fill: props.shape.fill,
				stroke: props.shape.stroke
			}
		});
	}

	onMouseEnter() {
		if (!this.state.selected)
			this.setState({
				style: {
					fill: `#${(parseInt(this.state.style.fill.replace('#', ''), 16) - 13107).toString(16)}`,
					stroke: `#${(parseInt(this.state.style.stroke.replace('#', ''), 16) - 13107).toString(16)}`,
					strokeWidth: (this.state.style.strokeWidth + 1)
			}});
	}

	onMouseLeave() {
		if (!this.state.selected)
			this.setState({
				style: {
					fill: `#${(parseInt(this.state.style.fill.replace('#', ''), 16) + 13107).toString(16)}`,
					stroke: `#${(parseInt(this.state.style.stroke.replace('#', ''), 16) + 13107).toString(16)}`,
					strokeWidth: (this.state.style.strokeWidth - 1)
			}});
	}

	onClick() {
		if (!this.state.selected)
			this.setState({
				selected: (!this.state.selected)
			});
		
		else
			this.setState({
				selected: (!this.state.selected)
			});
	}

	render() {
		return (
			<React.Fragment>
				<polygon
					points={this.state.location.points}
					// points={this.props.location.points}
					style={this.state.style}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					onClick={this.onClick}
					strokeWidth='4'
				/>
				<text
					x={this.state.location.coords.x}
					y={this.state.location.coords.y}
					fill='#000000'
				>
					{this.state.id}
				</text>
			</React.Fragment>
		);
	}
}
		
		export default Cell;
