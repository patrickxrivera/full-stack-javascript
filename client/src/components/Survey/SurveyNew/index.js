import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from '../SurveyForm';
import SurveyFormReview from '../SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  handleCancel = () => this.setState({ showFormReview: false });

  handleSubmit = () => this.setState({ showFormReview: true });

  renderContent = () =>
    this.state.showFormReview ? (
      <SurveyFormReview onCancel={this.handleCancel} />
    ) : (
      <SurveyForm onSubmit={this.handleSubmit} />
    );

  render() {
    return (
      <div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
