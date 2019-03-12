import React from 'react'
import SearchInput from '../../UI Elements/Search/Search';
import { Button } from '@material-ui/core';
import classes from './Sidebar.css';

const Sidebar = (props) => {

    const show = props.show;
    let navbarClass = [classes.SideNavbarClosed].join(' ');
    if(show) {
        navbarClass = [classes.SideNavbarOpen].join(' ');
    }

    return (
        <div className={navbarClass}>
            <SearchInput filter={false} styles={{width: '60%', height: '1.6rem', marginBottom: '1rem'}}/>
            <Button onClick={props.clicked}>
                <span className={[classes.Button, classes.ButtonActive].join(' ')}>
                    Find a Mentor
                </span>
            </Button>
            <Button onClick={props.clicked}><span className={classes.Button}>Make a team</span></Button>
            <Button onClick={props.clicked}><span className={classes.Button}>Events</span></Button>
            <Button onClick={props.clicked}>
                <span className={classes.Button} style={{color: '#12B6A6'}}>
                    John Doe 
                </span>
                
                <span style={{marginTop: '10px', marginLeft: '4px', color: '#12B6A6'}}><i className="material-icons">person_outline</i></span>
            </Button>
        </div>
    );
}

export default Sidebar;
