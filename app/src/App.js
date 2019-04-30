/* Library imports */
import React from 'react';
import {
	CssBaseline,MuiThemeProvider
} from '@material-ui/core';

/* Source imports */
import { theme } from './styles';
import View from './views';

/* App definition */
const App = () => (
	<CssBaseline>
		<MuiThemeProvider theme={theme}>
			<View />
		</MuiThemeProvider>
	</CssBaseline>
);

/* Module exports */
export default App;
