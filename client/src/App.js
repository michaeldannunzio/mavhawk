import React from 'react';
import Header from './components/Header';
import Chart from './components/Chart';
import Menu from './components/Menu';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './styles/Theme';

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <Header/>
          {/* <Menu/> */}
          <Chart/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
