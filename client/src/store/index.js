/* Library imports */
import { createStore } from 'redux';

/* Source imports */
import reducers from './reducers';

/* Initial store state */
const initialState = {
	selectedView: 'Dashboard',
	menuOpen: false
};

/* Store definition */
const store = createStore(reducers, initialState);

/* Module exports */
export default store;
export * from './types';
export * from './actions';
export * from './reducers';
