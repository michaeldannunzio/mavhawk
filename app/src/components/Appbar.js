/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloudDownloadIconRounded from '@material-ui/icons/CloudDownloadRounded';
import CloudUploadIconRounded from '@material-ui/icons/CloudUploadRounded';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';
import StopRounded from '@material-ui/icons/StopRounded';
import PowerSettingsNewRounded from '@material-ui/icons/PowerSettingsNewRounded';
import VideocamRounded from '@material-ui/icons/VideocamRounded';

/* Source imports */
import { configure } from '../util';
import { logo } from '../assets';
import Button from './Button';
import {
  startSession,
  endSession,
  importSession,
  exportSession,
  togglePower
} from '../store';


/* Component definition */
class Appbar extends React.Component {
  state = {
    mobileOpen: false,
  };
  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <div className={classes.divider}>
          <Button
            onClick={this.props.startSession}
            color='rgb(70, 220, 10)'
            textColor='rgb(250, 250, 250)'
          >
            <PlayArrowRounded className={classes.icon} />
            Start
          </Button>
          <Button
            onClick={this.props.endSession}
            color='rgb(240, 60, 50)'
            textColor='rgb(250, 250, 250)'
          >
            <StopRounded className={classes.icon} />
            End
          </Button>
        </div>
				<Divider />
        <div className={classes.divider}>
          <input
            className={classes.upload}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button onClick={this.props.importSession} color='rgb(20, 100, 250)' textColor='rgb(250, 250, 250)'>
              <CloudUploadIconRounded className={classes.icon} />
              Import
            </Button>
          </label>
          <a className={classes.download} href={logo} download>
            <Button onClick={this.props.exportSession} color='rgb(150, 50, 150)' textColor='rgb(250, 250, 250)'>
              <CloudDownloadIconRounded className={classes.icon} />
              Export
            </Button>
          </a>
        </div>
        <Divider />
        <div className={classes.divider}>
          <Button onClick={this.props.togglePower} color='rgb(250, 250, 250)' textColor='rgb(20, 20, 20)'>
            <PowerSettingsNewRounded className={classes.icon} style={{fill: !this.props.recording ? 'rgb(255, 0, 0)' : 'rgb(0, 255, 0)' }} />
            Power
          </Button>
          <Button onClick={this.props.toggleVideo} color='rgb(250, 250, 250)' textColor='rgb(20, 20, 20)'>
            <VideocamRounded className={classes.icon}  style={{fill: !this.props.recording ? 'rgb(255, 0, 0)' : 'rgb(0, 255, 0)' }} />
            Record
          </Button>
        </div>
        <Divider />
        <div className={classes.divider}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h6'>
                <b>
                  Current
                </b>
              </Typography>
              <Divider />
              <div className={classes.info}>
                <Typography variant='subtitle1'>
                  Size
                </Typography>
                <Typography variant='subtitle1'>
                  Time
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
    
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
              >
              <MenuIcon />
            </IconButton>
						<Typography variant="h5" color="inherit" noWrap>
							Dashboard
						</Typography>
						<img className={classes.logo} src={logo} alt='logo' />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
              >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

/* Component prop-types */
Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Variable initializations */
const drawerWidth = 160;

/* Component styles */
const styles = theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    height: 50,
    margin: '0 auto',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
  divider: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
  },
  info: {
    paddingTop: 10
  },
  upload: {
    display: 'none',
  },
  download: {
    textDecoration: 'none',
  },
});

/* Map state to props */
const store = (state, props) => ({});

/* Component actions */
const actions = {
  startSession,
  endSession,
  importSession,
  exportSession,
  togglePower
};

/* Component configurations */
const options = {
  styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Appbar);
