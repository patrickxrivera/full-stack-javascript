import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './auth';
import surveysReducer from './surveys';

export default combineReducers({
  isAuthenticated: authReducer,
  surveys: surveysReducer,
  form: reduxForm
});
