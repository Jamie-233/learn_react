import { useState, useReducer } from 'react'; // 参数如果是对象 应该使用 useReducer

const numberReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};

const Hooks = (params) => {

  const [count, setCount] = useState(0);
  const [state, setState] = useState({type: 'ADD', value: 0});
  const [number, numberDispatch] = useReducer(numberReducer, 0);



  const onClick = () => {
    // console.log(count);
    // hook 使用异步方式
    // setCount((cur) => {
    //   cur++;
    //   console.log(cur);
    //   return cur;
    // });

    setCount(count => count + 1);

    numberDispatch({type: 'add'}); // 传入一个最新的 action {type: 'add'}

    setState({type: 'ADD', value: 1 });

  //   setState(prevState => prevState.type === 'ADD'
  //       ? { ...prevState, value: prevState.value + 1 }
  //       : prevState
  //     // if(prevState.type === 'ADD') {
  //     //   return {
  //     //     ...prevState,
  //     //     value: prevState.value + 1
  //     //   }
  //     // }
  //     // return prevState;
  //   )
  };

  // console.log(count); // 外层获取

  return (
    <div>
      <div>{count}</div>
      <div>{number}</div>
      <div>{state.value}</div>
      <button onClick={() => onClick()}>button</button>
    </div>
  )
}

export default Hooks;
