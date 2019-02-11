import React, { Component } from 'react';
import classes from './App.css';
// import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Appbar/Appbar';
import Header from './components/Header/Header';
import SimpleTabs from './containers/Tabs/Tabs';
class App extends Component {

  findMentors = [
    {id: 1, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 2, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 3, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 4, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 5, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 6, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 7, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'},
    {id: 8, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Send Request'}
  ]

  sentRequests = [
    {id: 1, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Accepted'},
    {id: 2, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Accepted'},
    {id: 3, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Pending'}
  ]

  receivedRequests = [
    {id: 1, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Accept', button2: 'Reject'},
    {id: 2, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Accept', button2: 'Reject'},
    {id: 3, name: 'Mark Twain', position: 'FrontEnd Dev', button1: 'Accept', button2: 'Reject'}
  ]

  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Header />
        <SimpleTabs findMentors={this.findMentors} sentRequests={this.sentRequests} receivedRequests={this.receivedRequests}/>
        <div className={classes.last}></div>
      </div>
    );
  }
}

export default App;
