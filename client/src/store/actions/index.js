/* Source imports */
import {
	START_SESSION,
	END_SESSION,
	IMPORT_SESSION,
	EXPORT_SESSION,
	TOGGLE_POWER,
	FETCH_CHART_DATA
} from '../types';

export const startSession = () => ({
	type: START_SESSION,
	payload: true
});

export const endSession = () => ({
	type: END_SESSION,
	payload: true
});

export const importSession = () => ({
	type: IMPORT_SESSION,
	payload: true
});

export const exportSession = () => ({
	type: EXPORT_SESSION,
	payload: true
});

export const togglePower = () => ({
	type: TOGGLE_POWER,
	payload: true
});

export const fetchChartData = () => ({
	type: FETCH_CHART_DATA,
	payload: null
});
