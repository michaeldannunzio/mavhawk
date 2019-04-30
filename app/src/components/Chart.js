/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Card } from '@material-ui/core';
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	Brush
} from 'recharts';

/* Source imports */
import { configure } from '../util';

/* Component styles */
const styles = (theme) => ({
	chartBase: {
		padding: theme.spacing.unit * 3,
	},
	container: {},
	chart: {},
});

/* Component definition */
class Chart extends React.Component {
	state = {
		data: [{ time: '', C1: 0, C2: 0, C3: 0 }],
		status: false,
		brush: {
			startIndex: 0,
			endIndex: 59
		}
	};

	componentDidMount() {
		this.interval = setInterval(this.fetchData, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handleBrushChange = ({ startIndex, endIndex }) => {
		this.setState({
			brush: {
				startIndex,
				endIndex
			}
		});
	}

	fetchData = async () => {
		const c1 = await axios.get('/voltage_control/1');
		const c2 = await axios.get('/voltage_control/2');
		const c3 = await axios.get('/voltage_control/3');

		const newData = {
			time: c1.data.time,
			C1: c1.data.value,
			C2: c2.data.value,
			C3: c3.data.value,
		};

		if (c1.data.status === "True") {
			if (this.state.status === false) {
				this.setState({
					data: [{ time: '', C1: 0, C2: 0, C3: 0 }],
				});
			}
			
			
			this.setState({
				data: [...this.state.data, newData],
				status: true,
			});
		}

		else {
			this.setState({
				status: false,
			});
		}
		
		if (this.state.brush.endIndex >= this.state.data.length * 0.9) {
			this.setState({
				brush: {
					startIndex: this.state.data.length > 60 ? this.state.data.length - 60 : 0,
					endIndex: this.state.data.length
				}
			})
		}
	}

	render() {
		const { classes } = this.props;

	return (
		<Card className={classes.chartBase}>
				<ResponsiveContainer height={300} width='100%'>
					<LineChart
						width={600}
						height={300}
						data={this.state.data}
						margin={{top: 2, right: 40, left: -5, bottom: 2}}
					>
						<Legend iconSize={10} />
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip />
						<Brush
							dataKey="time" height={30} stroke="#8884d8"
							startIndex={this.state.brush.startIndex}
							endIndex={this.state.brush.endIndex}
							onChange={this.handleBrushChange}
							gap={5}
						/>
						<Line type="monotone" dataKey="C1" stroke="#8884d8" isAnimationActive={false} />
						<Line type="monotone" dataKey="C2" stroke="#82ca9d" isAnimationActive={false} />
						<Line type="monotone" dataKey="C3" stroke="#F5A34B" isAnimationActive={false} />
					</LineChart>
				</ResponsiveContainer>
			</Card>
		);
	}
}

/* Component prop-types */
Chart.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Component configurations */
const options = {
	styles,
};

/* Module exports */
export default configure(options)(Chart);
