import { Fragment, useState } from 'react'; // 类似Vue <template>

import './TodoList.css';

function TodoList(props) {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div>
        {count}
        <input type="text" />
        <button>提交</button>
        <button onClick={() => setCount(count + 1)}>Plus</button>
        <button onClick={() => setCount(count - 1)}>Minus</button>
      </div>
      <ul>
        <li>{props.name}</li>
        <li>学英语</li>
        <li>看定影</li>
        <li>喝啤酒</li>
      </ul>
    </Fragment>
  );
}

export default TodoList
