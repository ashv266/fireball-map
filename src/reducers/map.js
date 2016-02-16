import {SOME_ACTION} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
    data: {loaded: false}
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function mapAppState(state = initialState, action) {
  switch (action.type) {
    case SOME_ACTION:
      let newState = objectAssign({}, state);
      return newState;

    default:
      return state;
  }
}
