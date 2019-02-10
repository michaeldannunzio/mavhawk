/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import configure from './configure';
import {
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem
} from '@material-ui/core';


/* Component styles */
const styles = (theme) => ({
  menu: {},
});

/* Component definition */
class Menu extends React.Component {
  state = {};

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.menu}>
        <nav className={classes.menu}>
          <Hidden smUp implementation='css'>
            <Drawer
              variant='temporary'
              anchor='left'
              open={this.props.mobileOpen}
              onClose={this.props.ToggleMenu}
              classes={{paper: classes.paper}}
            >
              <React.Fragment>
                <div className={classes.drawer}>
                  <Divider />
                  <List>

                  </List>
                </div>
              </React.Fragment>
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

/* Component prop-types */
Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Component actions */
const actions = {};

/* Component configurations */
const options = {
  styles,
  store,
  actions
};

/* Module exports */
export default configure(options)(Menu);
