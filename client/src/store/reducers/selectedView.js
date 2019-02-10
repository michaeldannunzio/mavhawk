/* Source imports */
import { SELECT_VIEW } from '../types';

/* Reducer definition */
const selectedView = (view = null, action) => {
	switch (action.type) {
		case SELECT_VIEW:
			return action.payload;
	
		default:
			return view;
	}
};

/* Module exports */
export default selectedView;
