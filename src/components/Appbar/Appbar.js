import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './Appbar.css';
import unicodeLogo from './unicodelogo.png'
import SearchInput from '../UI Elements/Search/Search';
import Backdrop from '../UI Elements/Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const ButtonAppBar = (props) => {

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <span className={classes.HamMenu} onClick={props.clicked}>
            <i className="material-icons">menu</i>
          </span>          
          
          <img src={unicodeLogo} alt=""/>
          
          <div className={classes.SearchInput}>
            <SearchInput filter={false} styles={{width: '16rem', height: '1.6rem'}}/>
          </div>

          <NavigationItems />

          <Sidebar 
            show={props.show}
            clicked={props.clicked}/>

        </Toolbar>
        <Backdrop showBackdrop={props.show} clicked={props.clicked}/>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(ButtonAppBar);