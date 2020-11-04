import React from 'react';
import { Input, List, Button } from 'antd';
import 'antd/dist/antd.css';
// UI 组件 负责页面渲染

// 组件只有 render 函数 可以使用 无状态组件(函数) 性能高
// 普通组件是一个class类 还有一些生命周期函数有要执行 render

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          onChange={props.handleInputChange}
          style={{width: '300px', marginRight: '10px'}}
        />
        <Button
          shape="round"
          type="primary"
          onClick={props.handleButtonClick}
        >提交</Button>
      </div>
      { /* props.handleItemClick.bind(this, index) 传值问题*/ }
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {props.handleItemClick(index)}}>{item}</List.Item>
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//
//     )
//   }
// }
export default TodoListUI;
