import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./movieblock.less";
import BlockBoxOne from './components/BlockBoxOne'
import BlockBoxTwo from './components/BlockBoxTwo'
import BlockHeader from './components/BlockHeader'
class BlockTwo extends React.Component{

    constructor(props){
      super();
      this.state = {
        active:0
      }
    }

    navChange(i){
      this.setState({
        ...this.state,
        active:i
      })
    }

    render(){
      let {data} = this.props;
      let {active} = this.state;
      const groupOne = data.slice(0,8);
      const groupTwo = data.slice(8,9);
      const oneGroups = groupOne.map((o,i) => {
        return (
          <div key={i} style={{display:active === i?"block":"none"}}>
            <BlockBoxOne data={o} />
          </div>
        )
      });

      const twoGroups = groupTwo.map((o,i) => {
        return (
          <div key={i} style={{display:active === i?"block":"none"}}>
            <BlockBoxTwo data={o}/>
          </div>
        )
      });


      return (
        <div className={less.blockTwo}>
          <div className={less.boxOne}>
            <BlockHeader moveHandle={i => {this.navChange(i)}}/>
            {oneGroups}
          </div>
          <div className={less.boxTwo}>
            {twoGroups}
          </div>
        </div>
      )
    }
}

BlockTwo.propTypes = {

};

export default BlockTwo;
