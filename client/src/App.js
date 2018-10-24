import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Wing from './components/Wing';
import Graph from './components/Graph';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './styles/Theme';

const style = {
  App: {
    height: '100%',
    width: '100%'
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={style.App}>
        <MuiThemeProvider theme={Theme}>
          {/* <Menu/> */}
          <Header/>
          {/* <Graph/> */}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
