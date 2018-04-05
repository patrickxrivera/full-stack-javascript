import React from 'react';
import map from 'lodash/map';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../actions/survey';
import FORM_FIELDS from '../SurveyForm/data';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = map(FORM_FIELDS, ({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries:</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const getFormValues = (state) => state.form.surveyForm.values;

const mapStateToProps = (state) => ({
  formValues: getFormValues(state)
});

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
