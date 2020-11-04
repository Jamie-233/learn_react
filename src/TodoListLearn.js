import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的 state 或者 props 发生改变的时间, render函数就会重新执行
    // 1. state 数据
    // 2. JSX 模板
    // 3. 数据 + 模板 生成虚拟DOM (虚拟DOM就是一个JS对象, 用它来描述真实DOM)
    // ['div', {id: 'abc'}, ['span', {}, 'hello world']]

    // 4. 用虚拟DOM的结构生成新的DOM 来展示
    // <div id="abc"><span>hello world</span></div>

    // 5. state 发生变化
    // 6. 数据加模板生成新的虚拟DOM (极大提升了性能)
    // 7. 比较原始DOM和新的虚拟DOM的区别 找到区别的是span中的内容 (极大的提升性能)
    //  diffrence 找元素的虚拟DOM 和 新的虚拟DOM差异
    // 8. 直接操作DOM, 改变span中的内容

    // 虚拟DOM
    // 1. 性能提升 DOM的比对 变成 JS对象的比对
    // 2. 它使得跨端应用得以实现 React Native
    // 虚拟DOM中的 Diff算法

    // ref 操作DOM (建议数据确定的形式来编写代码 尽量不直接操作DOM)

    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          { /* 我是注释 */ }
          {
            // label 中的for 会被认为是 for 循环 改为 forhtmlFor class 语法改为 className
          }
          <h2>{this.props.name}</h2>
          <label htmlFor="insertAraet">输入内容</label>
          <input type="text"
            id="insertAraet"
            className="input"
            value={ this.state.inputValue }
            onChange={ this.handleInputChange }
            ref={(input) => {this.input = input}}
          />
          <button onClick={ this.handleButtonClick }>提交</button>
        </div>
        { /* 组件拆分 父组件向 子组件 传值 是通过标签属性的方式 */ }
        <ul ref={(ul) => {this.ul = ul}}>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  // 生命周期函数指 在某一个时刻 组件自动调用执行的函数
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // 组件被更新之前 会被自动执行
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // 组件被更新之前 会自动执行 是在shouldConponentUpdat之后
  // 如果 shouldComponentUpdate 返回 true之后才会执行
  // 如果返回false 这个函数就不会被执行了
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // 组件更新完成之后 会被执行
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // 如果没有Props 情况下不会被执行
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  componentDidMount() {
    axios.get('/api/todolist')
    .then(response => {
      console.log(response.data);
      this.setState(() => ({
        list: [...response.data]
      }))
    })
    .catch()
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
     // 组件拆分 父组件向 子组件 传值 是通过标签属性的方式
     return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
     )
   })
  }

  handleInputChange(e) {
    // console.log(this); // undefined 希望指向 TodoList 的组件 使用 bind 函数改变指向
    // console.log(e.target.value);
    // 如果想改变state的状态不能通过 this.state引用的形式改变对象的值
    //如果想改变state里对象的值 必须要使用 setState 方法

    // this.setState({
    //   inputValue: e.target.value
    // });

    // 新版的可以接受一个函数 而不是一个对象
    // const value = e.target.value; // 需要对value做一个保存

    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleButtonClick() {
    // prevState 修改数据之前的 等价于 this.props.state
    // setState 是异步
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // 希望获取 list中的DOM节点
      console.log(this.ul.querySelectorAll('li').length);
    });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    // const lists = [...this.state.list]; // 创建一个副本
    // lists.splice(index, 1);
    // this.setState({
    //   list: lists
    // })

    // 改写成
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list } // ES6写法 等价于 list: list
    })
  }
}

export default TodoList;
