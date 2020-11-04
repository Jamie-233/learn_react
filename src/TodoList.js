import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';
// 只有一个render 无状态组件
const TodoList = (props) => {
  // 解构赋值
  const { inputValue, handleInputChange, handleClick, list, handleDelete } = props;

  return (
    <div>
      <input type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return <li onClick={() => handleDelete(index)} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
// 连接映射关系 mapStateToProps
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (e) => dispatch({
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }),

    handleClick: () => dispatch({
      type: ADD_ITEM
    }),

    handleDelete: (index) => dispatch({
      type: DELETE_ITEM,
      value: index
    })
  }
}

// connect 让组件和 TodoList store 做连接
// 参数1: store关系 参2: props如果做修改做关联 参3: 是组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
