/* Library imports */
import axios from 'axios';

const RaspberryPi = axios({
	baseURL: 'http://localhost:3000/'
});

export default RaspberryPi;
