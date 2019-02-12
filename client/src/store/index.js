/* Library imports */
import { createStore } from 'redux';

/* Source imports */
import reducers from './reducers';


/* Store initial state */
const initialState = {
	selectedView: 'Chart',
	menuOpen: false
};

/* Store definition */
export const store = createStore(reducers, initialState);
console.log(store.getState());

/* Module exports */
export * from './actions';
export * from './reducers';
export * from './types';
