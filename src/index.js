import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux';
import store from './store';
import './index.css';


// import App from './App';
// import TodoListFunc from './TodoListFunc';
// import TodoListLearn from './TodoListLearn';

// import reportWebVitals from './reportWebVitals';
// <App /> 在React 在js中写在标签 就是JSX 语法 需要引入 react
// 使用自己的组件 必须以大写字母开头; 小写字母开头一般是h5标签
// <TodoListFunc name="Simone" />

// <TodoList name="Simone"/>
// <React.StrictMode></React.StrictMode>

// Provider 的子组件都可以连接 store;
// 重点 Provider 核心组件 把store提供给每一个组件 还需要通过connect连接
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
