import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginBox from "./Login";
import less from "./layout.less";

const Header = ({ navs, logins, navJump }) => {
  // 菜单栏
  const nav = navs.map(o =>
    <li key={o.name} onClick={navJump(o.href)}>
      {o.name}
    </li>
  );

  // 登录栏
  const login = logins.map(o =>
    <li key={o.name}>
      <i className={`iconfont icon-${o.name}`} />
    </li>
  );

  return (
    <div className={less.header}>
      <div className={less.headBox}>
        <ul className={less.navs}>
          {nav}
        </ul>
        <ul className={less.load}>
          {login}
        </ul>
      </div>
      <LoginBox />
    </div>
  );
};

Header.propTypes = {
  navs: PropTypes.array,
  logins: PropTypes.array,
  navJump: PropTypes.func
};

export default Header;
