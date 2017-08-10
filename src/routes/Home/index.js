import React from "react";
import { connect } from "dva";
import less from "./Home.less";
import { BlockOne, BlockTwo } from "../../components/Movieblock";
function Home({ homeData }) {
  const { newest, movie, teleplay, cartoon } = homeData;
  return (
    <div className={less.indexBox}>
      <BlockOne data={newest || []} />
      <BlockTwo data={movie || []} />
    </div>
  );
}

Home.propTypes = {};

function mapStateToProps({ home }) {
  const { homeData } = home;
  return {
    homeData
  };
}

export default connect(mapStateToProps)(Home);
