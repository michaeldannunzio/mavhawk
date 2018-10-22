import React from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './styles/Theme';

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <Navbar/>
          <Chart/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
