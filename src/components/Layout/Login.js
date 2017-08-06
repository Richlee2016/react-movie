import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";
import TweenOne from 'rc-tween-one';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true
    };
    this.animation = { scale: 1, yoyo: true, repeat: 0, duration: 1000 };
  }
  // 关闭
  closeLogin = () => { this.setState({ ...this.state, show: false }) };
  // 打开
  openLogin = (type) => {
    this.setState({ ...this.state, show: true });
    switch (type) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
    }
  }
  render() {
    const login = this.props.logins.map(o =>
      <li key={o.name} onClick={() => { this.openLogin(o.handle) }}>
        <i className={`iconfont icon-${o.name}`} />
      </li>
    );

    return (
      <div className={less.load}>
        <ul >
          {login}
        </ul>
        <div
          className={less.fadeBox}
          style={{ display: this.state.show ? "flex" : "none" }}
          onClick={this.closeLogin}
        >
          <div className={less.loginbox}>
            <TweenOne
              animation={this.animation}
              paused={this.props.paused}
              style={{ transform: 'scale(0)' }}
              className={less.shape}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.PropTypes = {};

export default Login;
