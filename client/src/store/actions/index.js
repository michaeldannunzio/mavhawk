/* Source imports */
import {
	START_SESSION,
	END_SESSION,
	IMPORT_SESSION,
	EXPORT_SESSION,
	FETCH_CHART_DATA
} from '../types';

export const startSession = () => ({
	type: START_SESSION,
	payload: 
})

export const fetchChartData = () => ({
	type: FETCH_CHART_DATA,
	payload: null
});
