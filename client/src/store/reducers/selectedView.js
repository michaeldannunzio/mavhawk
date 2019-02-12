/* Source imports */
import { SELECT_VIEW } from '../types';

/* Reducer definintion */
const selectedView = (view, action) => {
	switch (action.type) {
		case SELECT_VIEW:
			return action.payload;
	
		default:
			return view;
	}
};

/* Module exports */
export default selectedView;
