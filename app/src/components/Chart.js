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

const data = [
	{ time: '0:00', C1: 0, C2: 0, C3: 0 },
	{ time: '0:01', C1: 0, C2: 5, C3: 0 },
	{ time: '0:02', C1: 0, C2: 5, C3: 2 },
	{ time: '0:02', C1: 1, C2: 0 },
];

/* Component definition */
class Chart extends React.Component {
	state = {
		data: [
			{ time: '0', C1: 0, C2: 0, C3: 0 },
		],
	};

	componentDidMount() {
		this.interval = setInterval(this.fetchData, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	getBrushIndex = () => {
		const len = this.state.data.length;
		return len > 20 ? len - 20 : 0;
	}

	fetchData = async () => {

		const c1 = await axios.get('/voltage_control/1');
		const c2 = await axios.get('/voltage_control/2');
		const c3 = await axios.get('/voltage_control/3');

		console.log(c1.data, c2.data, c3.data);

		const newData = {
			time: c1.data.time,
			C1: c1.data.value,
			C2: c2.data.value,
			C3: c3.data.value,
		};

		this.setState({
			data: [...this.state.data, newData],
		});
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
						margin={{top: 2, right: 40, left: 0, bottom: 2}}
					>
						<Legend iconSize={10} />
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="time" />
						<YAxis />
						<Tooltip />
						<Brush dataKey="time" height={30} stroke="#8884d8" startIndex={this.getBrushIndex()} />
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

/* Map state to props */
const store = (state, props) => ({
	data: data,
});

/* Chart actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Chart);
