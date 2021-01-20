import React from 'react';
import {Drawer, makeStyles, IconButton,useTheme} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Cart from "../components/Cart";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 320;
const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));










 const DrawerRight = (props) => {
  const classes = useStyles();
  const theme = useTheme();
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={props.openRight}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={props.onCloseRight ? props.onCloseRight: null}
      >
      <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerCloseRight}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
       
        <Cart
        handleDrawerCloseRight={props.handleDrawerCloseRight} 

        />
       
   
      </Drawer>
      
    </div>
  );
}

export default DrawerRight