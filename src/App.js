import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
// 使用CSSTransition 后不需要自己手动添加或移除了 className={this.state.show ? 'show' : 'hide'}

import './App.css';
// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToogle = this.handleToogle.bind(this);
  }
  // appear 第一次出现也要动画
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {el.style.color='blue'}}
          appear={true}
          >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToogle}>toggle</button>
      </Fragment>
    )
  }

  handleToogle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;
