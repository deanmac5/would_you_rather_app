import './App.css';

import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Add from './components/add';
import Answer from './components/answer';
import CustomNavBar from './components/customnavbar';
import Dashboard from './components/dashboard';
import Leaderboard from './components/leaderboard';
import LoadingBar from 'react-redux-loading';
import Login from './components/login';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())  
    console.log(this.props);  
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
              <Route path='/answer' component={Answer}/>
              <Route path='/login' component={Login}/>
            </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
