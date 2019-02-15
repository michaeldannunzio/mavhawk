/* Source imports */
import { TOGGLE_MENU } from '../types';

const menuPosition = (position=false, action) => {
	switch (action.type) {
		case TOGGLE_MENU:
			return action.payload
	
		default:
			return position;
	}
}

export default menuPosition;
