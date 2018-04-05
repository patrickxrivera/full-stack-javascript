import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import reverse from 'lodash/fp/reverse';

import Survey from '../Survey';
import { fetchSurveys } from '../../../actions/survey';

const renderSurveys = flow(reverse, map(Survey));

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const surveyList = renderSurveys(this.props.surveys);

    return <div>{surveyList}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
