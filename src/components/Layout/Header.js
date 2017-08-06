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

  return (
    <div className={less.header}>
      <div className={less.headBox}>
        <ul className={less.navs}>
          {nav}
        </ul>
        <LoginBox logins={logins} />
      </div>
    </div>
  );
};

Header.propTypes = {
  navs: PropTypes.array,
  logins: PropTypes.array,
  navJump: PropTypes.func
};

export default Header;
