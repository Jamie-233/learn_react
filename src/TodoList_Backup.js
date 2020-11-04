// 容器组件 只关心业务逻辑
import React, { Component } from 'react';
// import axios from 'axios';

// getTodoList initListAction
import { getInitList, getInputChangeAction, getAddChangeAction, getDeleteChangeAction, } from './store/actionCreators';
// store 必须是唯一的 公共存储空间
// store 的核心功能:
// createStore() 创建一个 store
// store.dispatch 可以配发 action 传递给 store
// store.getState 可以获取 store 里面的所有数据内容
// store.subscribe 可以订阅store的改变 接收的回调函数就会被调用
import store from './store';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemClick={this.handleItemClick}
      />
    )
  }

  componentDidMount() {
    // redux-chunk 方式
    // const action = getTodoList(); // 返回一个函数
    // store.dispatch(action); // 发给 store dispatch方法会执行这个函数

    // redux-saga
    const action = getInitList();
    store.dispatch(action);

  }

  handleStoreChange() {
    // 只有 state 能改变边自己的内容
    this.setState(store.getState());
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleButtonClick() {
    const action = getAddChangeAction();
    store.dispatch(action);
  }

  handleItemClick(index) {
    const action = getDeleteChangeAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
