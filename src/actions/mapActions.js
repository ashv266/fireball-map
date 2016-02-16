import * as types from '../constants/ActionTypes';

export function someAction(settings) {
  return { type: types.SOME_ACTION, settings };
}
