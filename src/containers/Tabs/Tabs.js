import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Cards from '../../components/Cards/Cards';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1100,
    fontSize: 2,
  },
  tabsRoot: {
    borderBottom: '1px solid #afacac'
  },
  tabsIndicator: {
    backgroundColor: '#1bc4a8',
    display: 'none'
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: '600',
    marginTop: '0.4rem',
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#04CBAA',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#12B6A6',
      fontWeight: theme.typography.fontWeightBold,
      
    },
    '&:focus': {
      color: '#12B6A6',
      borderBottom: 'none', 
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});


const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { findMentors, sentRequests, receivedRequests } = this.props;
    return (
      <div className={classes.root} style={{margin:'auto'}}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Find a Mentor"
            className={classes.CenterOnSmall}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Sent Requests"
            className={classes.CenterOnSmall}
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Received Requests"
            className={classes.CenterOnSmall}
          />
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer><Cards cardsInfo={findMentors} searchInput={true} filterIcon/></TabContainer>
          <TabContainer><Cards cardsInfo={sentRequests} searchInput={false}/></TabContainer>
          <TabContainer><Cards cardsInfo={receivedRequests} searchInput={false}/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(CustomizedTabs);