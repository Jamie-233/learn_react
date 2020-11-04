import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 属性接受的强校验

class TodoItem extends Component {
  // constructor 组件创建的时候第一次要执行的方法
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被重新执行了 子组件的这个生命周期函数就会被执行
  // 如果这个组件之前存在于父组件中 不会执行
  // 如果这个组件之前已经存在于父组件中 才会执行
  // componentWillReceiveProps() {
  //   console.log('child - componentWillReceiveProps');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) return true;
    return false;
  }

  render() {
    console.log('child - render');
    const { content } = this.props;
    // JSX -> createElement 方法 -> 虚拟DOM (JS对象) -> 真实的DOM
    // return <div>item</div> 等同于 React.createElement('div', {}, 'item')
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }

  // 子组件修改父组件值
  // 子组件调用父组件的方法 去改变数据 只需要把方法传给子组件就行
  // 调用 this.props.deleteItem 时 就相当于是调用 this.handleItemDelete
  // 当前子组件下的 找不到 handleItemDelete 方法 可以使用 bind方法
  handleClick() {
    // this.props.deleteItem(this.props.index);

    // 改写
    const { deleteItem, index } = this.props;

    deleteItem(index);
  }

  // 当这个组件即将被从页面剔除的时候 会执行
  // componentWillUnmount() {
  //   console.log('child - componentWillUnmount');
  // }
}
// arrayOf 要求是一个数组 里面是字符串和数字
// oneOfType([PropTypes.string, PropTypes.number]) 允许字符串和数字

TodoItem.propTypes = {
  test: PropTypes.array.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  test: []
}

export default TodoItem;
