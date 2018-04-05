import React, { Component } from 'react';
import map from 'lodash/map';
import each from 'lodash/each';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import FORM_FIELDS from './data';
import SurveyField from '../SurveyField';
import validateEmails from '../../../utils/validateEmails';

const formStyle = { marginTop: '4rem' };

class SurveyForm extends Component {
  renderField = ({ label, name }) => (
    <Field
      key={name}
      label={label}
      id={name}
      type="text"
      name={name}
      component={SurveyField}
    />
  );

  renderFields = () => map(FORM_FIELDS, this.renderField);

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  each(FORM_FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
