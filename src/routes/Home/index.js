import React from "react";
import { connect } from "dva";
import less from "./Home.less";
function Home() {
 
  return (
    <div className={less.indexBox}>
        index
    </div>
  );
}

Home.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Home);
