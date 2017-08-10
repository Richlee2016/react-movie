import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "../movieblock.less";

const BlockBoxTwo = ({data}) => {
  const box = data.map(o => {
    return (
      <li key={o.id}>
        <img src={o.details.img} />
        <span></span>
      </li>
    )
  })
  return (
      <ul className={less.blockBoxTwo}>
        
      </ul>
  );
};

BlockBoxTwo.propTypes = {

};

export default BlockBoxTwo;
