import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import classes from './Appbar.css';
import unicodeLogo from './unicodelogo.png'
import SearchInput from '../UI Elements/Search/Search';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const ButtonAppBar = (props) => {
//   const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <img src={unicodeLogo} alt=""/>
          <div className={classes.SearchInput}>
            <SearchInput filter={false} styles={{width: '20rem', height: '1.6rem'}}/>
          </div>
          <div className={classes.ButtonContainer}>
            <Button><span className={[classes.Button, classes.ButtonActive].join(' ')}>Find a Mentor</span></Button>
            <Button><span className={classes.Button}>Make a team</span></Button>
            <Button><span className={classes.Button}>Events</span></Button>
            <Button>
                <span className={classes.Button} style={{color: '#12B6A6'}}>
                    John Doe
                </span>
                <i class="material-icons" style={{margin: 'auto', color: '#12B6A6'}}>person_outline</i>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(ButtonAppBar);