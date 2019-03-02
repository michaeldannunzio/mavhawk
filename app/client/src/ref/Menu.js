/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
 Hidden,
 Drawer,
 Divider,
 List,
 ListItem,
} from '@material-ui/core';


/* Source imports */
import { configure } from '../util';

const drawerWidth = 240;

/* Menu styles */
const styles = (theme) => ({
	menu: {
		[theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
	},
	toolbar: theme.mixins.toolbar,
});

/* Menu definition */
class Menu extends React.Component {
	state = {};

	render() {
		const { classes, position } = this.props;

		return (
			<nav className={classes.menu}>
				<div className={classes.toolbar}>
					<Hidden xsDown implementation='css'>
						<Drawer
							variant='permanent'
							anchor='left'
							open={position}
						>
							<Divider />
								<List>
									<ListItem>
										hey
									</ListItem>
									<ListItem>
										bye
									</ListItem>
								</List>
								<Divider />
						</Drawer>
					</Hidden>
				</div>
			</nav>
		);
	}
}

/* Menu prop-types */
Menu.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({
	position: state.menuPosition
});

/* Menu actions */
const actions = {};

/* Menu configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Menu);
