import { handleActions } from 'redux-actions';

const initialState = [];

export default handleActions(
  {
    FETCH_SURVEYS: (state, action) => action.payload
  },
  initialState
);

export const getIsAuthenticated = (state) => state.isAuthenticated;
