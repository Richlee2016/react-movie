import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";

class Navs extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { navs } = this.props;
    console.log(navs);
    const nav = navs.map(o => {
      return (
        <li key={o.name}>
          <span>10</span>
          <label>{o.name}</label>
        </li>
      );
    });

    return (
      <div className={less.navs}>
        <ul className={less.nav}>
        {nav}
        </ul>
        <ul className={less.subnav} />
      </div>
    );
  }
}

Navs.PropTypes = {};

export default Navs;
