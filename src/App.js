import './App.css';

import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Add from './components/add';
import CustomNavBar from './components/customnavbar';
import Dashboard from './components/dashboard';
import Leaderboard from './components/leaderboard';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

class App extends Component {

  componentDidMount() {
    const { dispatch, loading } = this.props
    if (loading === true ) {
      dispatch(handleInitialData())
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <CustomNavBar />
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

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
