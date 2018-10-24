import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

class Menu extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              open
            >
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}


export default Menu;
