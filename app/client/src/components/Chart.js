/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line
} from 'recharts';

/* Source imports */
import { configure } from '../util';

/* Component styles */
const styles = (theme) => ({
	chartBase: {
		padding: theme.spacing.unit * 3,
	},
	container: {},
	chart: {

	},
});

const data = [
	{ time: '0:00', C1: 0, C2: 0, C3: 0 },
	{ time: '0:10', C1: 10, C2: 11, C3: 12 },
	{ time: '0:20', C1: 10.1, C2: 11.5, C3: 14 },
	{ time: '0:30', C1: 10.2, C2: 12, C3: 12 },
	{ time: '0:40', C1: 10.3, C2: 12.5, C3: 10 },
	{ time: '0:50', C1: 10.4, C2: 13, C3: 11 },
	{ time: '1:00', C1: 10.5, C2: 13.5, C3: 12 },
	{ time: '1:10', C1: 11, C2: 14, C3: 13 },
	{ time: '1:20', C1: 11.5, C2: 14.5, C3: 14 },
	{ time: '1:30', C1: 12, C2: 15, C3: 15 },
];

/* Component definition */
class Chart extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

	return (
		<Card className={classes.chartBase}>
				<ResponsiveContainer height={400} width='100%'>
					<LineChart
						width={600}
						height={300}
						data={this.props.data}
						margin={{top: 5, right: 20, left: 0, bottom: 5}}
					>
						<Legend
							align='right'
							layout='vertical'
							verticalAlign='top'
							// iconSize='18'
							iconType='circle'
						/>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="Time" label='Time' />
						<YAxis label='Voltage' />
						<Tooltip />
						<Line type="monotone" dataKey="C1" stroke="#8884d8" />
						<Line type="monotone" dataKey="C2" stroke="#82ca9d" />
						<Line type="monotone" dataKey="C3" stroke="#F5A34B" />
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
