import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// import store from './store';
import { initListAction } from './actionCreators';
import { GET_INIT_LIST } from './actionTypes';


function* getInitList() {
  // 如果使用 generator 语法 万一Ajax请求 失败会产生错误; 可以使用try catch
  try {
    const res = yield axios.get('/lists.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.error('list.json 请求失败');
  }

  // axios.get('/lists.json')
  // .then(response => {
  //   const data = response.data;
  //   console.log(action);
  //   // put(action);
  // })
  // .catch()
}

// 必须是一个 Generator 函数
function* mySaga() {
  // 通过 takeEvery 捕获每次派发的 action
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
