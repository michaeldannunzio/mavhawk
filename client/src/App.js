import React from 'react';
import Header from './components/Header';
import Graph from './components/Graph';
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
          <Graph/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
