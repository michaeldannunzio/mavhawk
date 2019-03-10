/* Library imports */
import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

/* Source imports */
import reducers from './reducers';


/* Initial store state */
const initialState = {};

/* Redux Middleware */
const middleware = applyMiddleware(thunk);

/* Store definition */
const store = createStore(reducers, middleware, initialState);

/* Module exports */
export default store;
export * from './types';
export * from './actions';
