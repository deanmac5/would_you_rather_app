import './App.css';

import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Add from './components/add';
import Dashboard from './components/dashboard';
import Leaderboard from './components/leaderboard';
import LoadingBar from 'react-redux-loading';
import Nav from './components/nav';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
            ? null
            : <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/add' component={Add} />
              <Route path='/leaderboard' component={Leaderboard}/>
            </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
