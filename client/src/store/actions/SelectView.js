/* Source imports */
import { SELECT_VIEW } from '../types';

/* Action definition */
const SelectView = (view) => ({
	type: SELECT_VIEW,
	payload: view
});

/* Module exports */
export default SelectView;
