import React from 'react';
import classes from './Search.css';

const Search = (props) => {

    const search_icon = (<i className={[classes.SearchIconStyle, "material-icons"].join(' ')}>search</i>);

    let filter_icon = null;
    if(props.filter){
        filter_icon = (<i className={[classes.FilterIconStyle, "material-icons"].join(' ')}>filter_list</i>);
    }

    let style = {};
    if(props.styles){
        style = props.styles;
    }

    return (

        <div className={classes.Container}>
            {filter_icon}
            <div className={classes.inputContainer}>
                {search_icon}
                <input type="text" placeholder="Search" name="searchText" className={classes.SearchInput} style={style}/>
            </div>
        </div>
    );
}

export default Search;