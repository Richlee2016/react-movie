import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true
    };
  }

  closeLogin = () => {this.setState({...this.state,show:false})};

  render() {
    return (
      <div
        className={less.fadeBox}
        style={{ display: this.state.show ? "block" : "none" }}
        onClick={this.closeLogin}
      />
    );
  }
}

Login.PropTypes = {};

export default Login;
