/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
const INITIAL_STATE = {
  index: 0,
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTIVE_INDEX':
      console.log(action.payload);
      return {
        ...state,
        index: action.payload.index,
      };
    default:
      return state;
  }
};

export default combineReducers({sliderReducer});
