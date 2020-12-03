import React from 'react';
import {AppBar,makeStyles, Toolbar,Typography,IconButton, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import data from "../data.json"; 

import clsx from 'clsx';


import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';







function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// const drawerWidth = 240;

const useStyles = makeStyles(theme =>({
  offset: theme.mixins.toolbar,
  menuButton:{
      marginRight:theme.spacing(2),
  },
  title:{
      flexGrow:1
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
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
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))


const ElevateAppBar= (props) => {
  const classes = useStyles()

  

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}>
          <Toolbar>
            <IconButton 
                aria-label="menu drawer open" 
                color="inherit"
                className={clsx(classes.menuButton, props.open && classes.hide)}
                onClick={props.handleDrawerOpen}
                edge="start"

                >
                <MenuIcon  />
              </IconButton>
                <Typography variant="h6" className={classes.title}>
                     <a className="logo-principal" href="/">
                        <img src={data.logo[0].imagen} alt="" />
                     </a>
                </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    <div className={classes.offset}></div>

    </React.Fragment>
    
  );
}



export default ElevateAppBar