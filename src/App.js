import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from "./component/dashboard"
import BookDetail from "./component/bookDetail"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact={true} path="/" component={DashBoard} />
        <Route path="/bookdetail" component={BookDetail} />
      </div>
      </Router>
    );
  }
}

export default App;
