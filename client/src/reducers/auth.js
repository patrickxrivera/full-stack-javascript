import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    FETCH_USER: (state, action) => {
      console.log(action);
      return state;
    }
  },
  initialState
);
