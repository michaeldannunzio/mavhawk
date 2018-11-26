import React from 'react';
import { Paper } from '@material-ui/core';
import Point from './Point';

const style = {
	Paper: {
		width: '80%',
		padding: '1%'
	},
	svg: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FAFAFA',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 4
	},
	grid: {
		fill: null,
		stroke: '#D0D0D0',
		strokeDasharray: 2,
		strokeWidth: 1
	},
	line: {
		incrementAmount: 25
	}
};

class Graph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			size: {
				paper: {
					height: null,
					width: null
				},
				svg: {
					height: null,
					width: null
				}
			}
		};

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		this.setState({
			size: {
				paper: {
					height: document.getElementsByClassName('graph-paper')[0].clientHeight,
					width: document.getElementsByClassName('graph-paper')[0].clientWidth
				},
				svg: {
				height: document.getElementsByClassName('graph-svg')[0].clientHeight,
				width: document.getElementsByClassName('graph-svg')[0].clientWidth
			}}});

			window.addEventListener('resize', this.onResize.bind(this));
	}

	componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

	onResize() {
		this.setState({
			size: {
				paper: {
					height: document.getElementsByClassName('graph-paper')[0].clientHeight,
					width: document.getElementsByClassName('graph-paper')[0].clientWidth
				},
				svg: {
				height: document.getElementsByClassName('graph-svg')[0].clientHeight,
				width: document.getElementsByClassName('graph-svg')[0].clientWidth
			}}});
	}

	renderGrid() {
		const incr = style.line.incrementAmount;

		const v = () => {
			var lines = [];
			for (var i = incr; i < this.state.size.svg.width; i += incr)
				lines.push(i);

			return lines.map((length, index) =>
				<line
					style={style.grid}
					x1={length} x2={length}
					y1={'0%'} y2={'100%'}
				/>
			);
		}

		const h = () => {
			var lines = [];
			for (var i = incr; i < this.state.size.svg.height; i += incr)
				lines.push(i);

			return lines.map((length, index) =>
				<line
					style={style.grid}
					x1={'0%'} x2={'100%'}
					y1={length} y2={length}
				/>
			);
		}
		
		return Array.prototype.concat(v(), h());
	}

	renderData() {
		// Responsive data rendering 
	}

	render() {
		return (
			<div className='graph-wrapper'>
				<Paper className='graph-paper' style={style.Paper} height={(this.state.size.paper.height * 0.60)} padding='1%'>
					<svg className='graph-svg' style={style.svg}>
						<g style={style.grid}>
							{this.renderGrid()}
						</g>
						<Point/>
					</svg>
				</Paper>
			</div>
		);
	}
}

export default Graph;
