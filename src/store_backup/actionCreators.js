// import axios from 'axios';
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_DOTO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST,
} from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddChangeAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteChangeAction = (index) => ({
  type: DELETE_DOTO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// 使用 redux-thunk 之后可以return 一个函数
// export const getTodoList = () => {
//   return (dispatch) => { // 函数接受 dispatch 方法
//     axios.get('/lists.json')
//     .then(response => {
//       const data = response.data;
//       const action = initListAction(data);
//       dispatch(action);
//     })
//     .catch()
//   }
// }

// redux-saga
export const getInitList = () => ({
  type: GET_INIT_LIST
})
