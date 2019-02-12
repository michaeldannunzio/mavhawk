/* Library imports */
import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

/* Source imports */
import store from './store';
import { theme } from './styles';
import View from './views';

/* App definition */
const App = () => (
	<Provider store={store}>
		<CssBaseline>
			<MuiThemeProvider theme={theme}>
				<View />
			</MuiThemeProvider>
		</CssBaseline>
	</Provider>
);

/* Module exports */
export default App;
