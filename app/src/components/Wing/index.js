import React from 'react';
import { Paper } from '@material-ui/core';
import Cell from './Cell';

const style = {
	parent: {
		height: '60%',
		width: '30%',
		margin: '2%',
		padding: 0,
		float: 'left'
	},
	Paper: {
		height: '100%',
		width: '100%',
		padding: '1%'
	},
	svg: {
		width: '100%',
		height: '100%',
		borderWidth: 1
	},
	selectAll: {
		// change 'on' and 'off' to be green and red color schemes
		circle: {
			on: {
				fill: '#99FF99',
				stroke: '#66FF66',
				strokeWidth: 4
			},
			off: {
				fill: '#CCFFCC',
				stroke: '#99FF99',
				strokeWidth: 4
			}
		}
	},
	shapes: [
		{
			id: 'L1',
			fill: '#FFCCCC',
			stroke: '#FF9999'
		},
		{
			id: 'L2',
			fill: '#FFE6CC',
			stroke: '#FFCC99'
		},
		{
			id: 'L3',
			fill: '#FFFFCC',
			stroke: '#FFFF99'
		},
		{
			id: 'L4',
			fill: '#E6FFCC',
			stroke: '#CCFF99'
		},
		{
			id: 'L5',
			fill: '#CCFFE6',
			stroke: '#99FFCC'
		}
	]
};

class Wing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			size: {
				height: null,
				width: null
			},
			selectAll: {
				selected: true,
				style: style.selectAll.circle.on
			}
		};

		this.onResize = this.onResize.bind(this);
		this.selectAll = this.selectAll.bind(this);
		this.selectHover = this.selectHover.bind(this);
	}

	componentDidMount() {
		this.setState({
			size: {
				height: document.getElementsByClassName('wing')[0].clientHeight,
				width: document.getElementsByClassName('wing')[0].clientWidth
		}});

		window.addEventListener('resize', this.onResize.bind(this));
	}

	componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

	onResize() {
		this.setState({
			size: {
				height: document.getElementsByClassName('wing')[0].clientHeight,
				width: document.getElementsByClassName('wing')[0].clientWidth
			}});
	}

	selectAll() {
		if (!this.state.selectAll.selected)
			this.setState({
				selectAll: {
					selected: (!this.state.selectAll.selected),
					style: style.selectAll.circle.on
			}});

		else
			this.setState({
				selectAll: {
					selected: (!this.state.selectAll.selected),
					style: style.selectAll.circle.off
			}});
	}

	selectHover() {
		// when hovering over button lighten the colors
	}

	renderCells() {
		const location = [
			{
				points: [
					[(this.state.size.width * 0.99), (this.state.size.height * 0.01)],
					[(this.state.size.width * 0.99), (this.state.size.height * 0.49)],
					[(this.state.size.width * 0.61), (this.state.size.height * 0.49)],
					[(this.state.size.width * 0.61), (this.state.size.height * 0.10)]
				].map(point => point.join(',')).join(' '),
				coords: {
					x: (this.state.size.width * (0.99 + 0.61) / 2),
					y: (this.state.size.height * (0.49 + 0.10) / 2)
				}
			},
			{
				points: [
					[(this.state.size.width * 0.99), (this.state.size.height * 0.515)],
					[(this.state.size.width * 0.99), (this.state.size.height * 0.99)],
					[(this.state.size.width * 0.61), (this.state.size.height * 0.99)],
					[(this.state.size.width * 0.61), (this.state.size.height * 0.515)]
				].map(point => point.join(',')).join(' '),
				coords: {
					x: (this.state.size.width * (0.99 + 0.61) / 2),
					y: (this.state.size.height * (0.99 + 0.515) / 2)
				}
			},
			{
				points: [
					[(this.state.size.width * 0.60), (this.state.size.height * 0.10)],
					[(this.state.size.width * 0.60), (this.state.size.height * 0.49)],
					[(this.state.size.width * 0.26), (this.state.size.height * 0.49)],
					[(this.state.size.width * 0.26), (this.state.size.height * 0.30)]
				].map(point => point.join(',')).join(' '),
				coords: {
					x: (this.state.size.width * (0.60 + 0.26) / 2),
					y: (this.state.size.height * (0.49 + 0.30) / 2)
				}
			},
			{
				points: [
					[(this.state.size.width * 0.60), (this.state.size.height * 0.51)],
					[(this.state.size.width * 0.60), (this.state.size.height * 0.99)],
					[(this.state.size.width * 0.26), (this.state.size.height * 0.99)],
					[(this.state.size.width * 0.26), (this.state.size.height * 0.51)]
				].map(point => point.join(',')).join(' '),
				coords: {
					x: (this.state.size.width * (0.60 + 0.26) / 2),
					y: (this.state.size.height * (0.99 + 0.51) / 2)
				}
			},
			{
				points: [
					[(this.state.size.width * 0.25), (this.state.size.height * 0.31)],
					[(this.state.size.width * 0.25), (this.state.size.height * 0.99)],
					[(this.state.size.width * 0.01), (this.state.size.height * 0.99)]
				].map(point => point.join(',')).join(' '),
				coords: {
					x: (this.state.size.width * (0.25 + 0.01) / 1.6),
					y: (this.state.size.height * (0.99 + 0.31) / 1.6)
				}
			}
		];


		const cells = location.map((loc, i) =>
			<Cell location={loc} shape={style.shapes[i]} key={style.shapes[i].id}/>
		);

		return cells;
	}

	render() {
		return (
			<div style={style.parent}>
				<Paper style={style.Paper}>
					<svg className='wing' style={style.svg}>
					<circle
						cx={this.state.size.width * 0.07}
						cy={this.state.size.height * 0.2}
						r={this.state.size.width * this.state.size.height * 0.0002}
						style={this.state.selectAll.style}
						strokeWidth='4'
						onClick={this.selectAll}
					/>
						<g>
							{this.renderCells()}
						</g>
					</svg>
				</Paper>
			</div>
		);
	}
}

export default Wing;
