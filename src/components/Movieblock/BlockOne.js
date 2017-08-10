import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./movieblock.less";
import BlockBoxOne from './components/BlockBoxOne'
import BlockBanner from './components/BlockBanner'


const BlockOne = ({ data }) => {
  // banner
  const bannerImg = data.slice(0, 4);
  const boxOne = data.slice(4,14)
  return (
    <div className={less.blockOne}>
      <BlockBanner data={bannerImg} />
      <BlockBoxOne data={boxOne} />
    </div>
  );
};

BlockOne.propTypes = {
  data:PropTypes.array
};

export default BlockOne;
