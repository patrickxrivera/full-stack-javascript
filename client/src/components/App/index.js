import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

import Header from '../Header';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../Survey/SurveyNew/';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
