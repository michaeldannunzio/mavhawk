import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
// import Wing from './components/Wing';
import Graph from './components/Graph';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './styles/Theme';

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider theme={Theme}>
          <Menu/>
          <Header/>
          <Graph/>
          {/* <Wing/> */}
        </MuiThemeProvider>
    );
  }
}

export default App;
