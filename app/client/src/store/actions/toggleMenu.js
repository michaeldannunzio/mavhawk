/* Source imports */
import { TOGGLE_MENU } from '../types';

/* Action definition */
const toggleMenu = (position) => ({
	type: TOGGLE_MENU,
	payload: position
});

/* Module exports */
export default toggleMenu;
