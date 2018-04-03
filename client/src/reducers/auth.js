import { handleActions } from 'redux-actions';

const initialState = null;

export default handleActions(
  {
    FETCH_USER: (state, action) => {
      const newState = action.payload || false;
      return newState;
    }
  },
  initialState
);

export const getIsAuthenticated = (state) => state.isAuthenticated;
