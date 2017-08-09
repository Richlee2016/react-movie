import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginBox from "./Login";
import less from "./layout.less";

const Header = ({ menus, logins, navJump }) => {
  // 菜单栏
  const menu = menus.map(o =>
    <li key={o.name} onClick={navJump(o.href)}>
      {o.name}
    </li>
  );

  return (
    <div className={less.header}>
      <div className={less.headBox}>
        <ul className={less.menus}>
          {menu}
        </ul>
        <LoginBox logins={logins} />
      </div>
    </div>
  );
};

Header.propTypes = {
  menus: PropTypes.array,
  logins: PropTypes.array,
  navJump: PropTypes.func
};

export default Header;
