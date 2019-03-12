import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  return (
    <nav className={classes.ButtonContainer}>
            <Button><span className={[classes.Button, classes.ButtonActive].join(' ')}>Find a Mentor</span></Button>
            <Button><span className={classes.Button}>Make a team</span></Button>
            <Button><span className={classes.Button}>Events</span></Button>
            <Button>
                <span className={classes.Button} style={{color: '#12B6A6'}}>
                    John Doe
                </span>
                <i className="material-icons" style={{margin: 'auto', color: '#12B6A6'}}>person_outline</i>
            </Button>
    </nav>
  )
}

export default NavigationItems;