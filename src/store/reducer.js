import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [],
};

export default function Reducer(state=defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  if(action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_ITEM) {
    if(!newState.inputValue) return newState;
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_ITEM) {
    newState.list.splice(action.value, 1);
    return newState;
  }

  return state;
}
