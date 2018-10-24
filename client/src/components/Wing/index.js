import React from 'react';
import { Paper } from '@material-ui/core';

class Wing extends React.Component {
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
		// Button to select all cells
	}

	renderCells() {

	}

	render() {
		const cells = this.renderCells();

		return (
			<div style={style.parent}>
				<Paper style={style.Paper}>
					<svg className='wing' style={style.svg}>
						<g>
							{cells}
						</g>
					</svg>
				</Paper>
			</div>
		);
	}
}

export default Wing;
