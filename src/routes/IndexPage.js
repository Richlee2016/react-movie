import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import PropTypes from "prop-types";
import less from "./IndexPage.less";
import bannerImg from "../assets/images/test.jpg";
import Header from "../components/Layout/Header";
import Search from "../components/Layout/Search";
function IndexPage({ dispatch, children, app }) {
  const { navs, logins } = app;
  // 平常跳转
  const pageJump = href => () => {
    dispatch(
      routerRedux.push({
        pathname: `/${href}`
      })
    );
  };
  // 搜索跳转
  const searchHandle = val => () => {
    dispatch(
      routerRedux.push({
        pathname: `/search`,
        query:{s:encodeURI(val),p:1}
      })
    );
  };

  return (
    <div className={less.container}>
      <Header navs={navs} logins={logins} navJump={pageJump} />
      <div
        className={less.banner}
        style={{ background: `url(${bannerImg})` }}
      />
      <Search rankJump={pageJump("ranks")} search={searchHandle} />
      <div className={less.main}>
        {children}
      </div>
    </div>
  );
}

IndexPage.propTypes = {
  app: PropTypes.object
};

function mapStateToProps({ app }) {
  return {
    app
  };
}

export default connect(mapStateToProps)(IndexPage);
