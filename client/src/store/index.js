/* Library imports */
import { createStore } from 'redux';

/* Source imports */
import reducers from './reducers';

/* Initial store state */
const initialState = {
	menuPosition: true
};

/* Store definition */
const store = createStore(reducers, initialState);

console.log(store.getState());

/* Module exports */
export default store;
export * from './types';
export * from './actions';
export * from './reducers';
