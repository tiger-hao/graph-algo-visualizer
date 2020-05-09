import { START_ALGORITHM, END_ALGORITHM } from 'constants/actionTypes';

const initialState = {
  isRunning: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_ALGORITHM:
      return { ...state, isRunning: true };
    case END_ALGORITHM:
      return { ...state, isRunning: false };
    default:
      return state;
  }
}

export default reducer;
