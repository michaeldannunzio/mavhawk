/* Library imports */
import { combineReducers } from 'redux';

/* Source imports */
import selectedView from './selectedView';

/* Reducers definition */
const reducers = combineReducers({
	selectedView,
});

/* Module exports */
export default reducers;
export { default as selectedView } from './selectedView';