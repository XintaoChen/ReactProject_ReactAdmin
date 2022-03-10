import React from "react";

import { connect } from "react-redux";
import { createSelectionAction } from "../../../redux/actions/LeftNav";

function Home() {
  return <div>Home</div>;
}

export default connect((state) => ({ leftNav: state.leftNav }), {
  select: createSelectionAction,
})(Home);
