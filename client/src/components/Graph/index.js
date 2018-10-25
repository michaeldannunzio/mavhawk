import React from 'react';
import { Paper } from '@material-ui/core';
import Point from './Point';

const style = {
	parent: {
		height: '100%',
		width: '60%',
		// margin: '20%',
		margin: 20,
		padding: 0
	},
	Paper: {
		height: '100%',
		width: '100%',
		// padding: '5% 10% 10% 5%'
		padding: '2%'
	},
	svg: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FAFAFA',
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: 6
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
				height: null,
				width: null
			}
		};

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		this.setState({
			size: {
				height: document.getElementsByClassName('graph')[0].clientHeight,
				width: document.getElementsByClassName('graph')[0].clientWidth
			}});

			window.addEventListener('resize', this.onResize.bind(this));
	}

	componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

	onResize() {
		this.setState({
			size: {
				height: document.getElementsByClassName('graph')[0].clientHeight,
				width: document.getElementsByClassName('graph')[0].clientWidth
			}});
	}

	renderGrid() {
		const incr = style.line.incrementAmount;

		const v = () => {
			var lines = [];
			for (var i = incr; i < this.state.size.width; i += incr)
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
			for (var i = incr; i < this.state.size.height; i += incr)
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
			<div style={style.parent}>
				<Paper style={style.Paper}>
					<svg className='graph' style={style.svg}>
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
