import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './auth';

export default combineReducers({
  isAuthenticated: authReducer,
  form: reduxForm
});
