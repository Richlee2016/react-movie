import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function Movies() {
 
  return (
    <div>
        movies
    </div>
  );
}

Movies.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Movies);
