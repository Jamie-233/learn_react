import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_DOTO_ITEM,
  INIT_LIST_ACTION,
  // GET_INIT_LIST,
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [1, 2, 3],
}
// reducer 是纯函数
// reducer 可以接受 state 但是不能修改 state
// 可以接受state 给定固定的输入 就一定会有固定的输出 而且不会有任何副作用
// action 给定的时候 返回的是一样的结果
// 不能有 时间和异步相关的操作

// state 上一次存储的数据
// action 是stote(用户) 传过来的一句话
export default function Reducer(state=defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  if(action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_TODO_ITEM) {
    if(!newState.inputValue) return newState;
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if(action.type === DELETE_DOTO_ITEM) {
    newState.list.splice(action.index, 1);
    return newState;
  }

  if(action.type === INIT_LIST_ACTION) {
    // newState.list = action.data;
    newState.list.push(...action.data);
    return newState;
  }

  // if(action.type === GET_INIT_LIST) {
  //   // console.log(action);
  // }

  return state;
}
