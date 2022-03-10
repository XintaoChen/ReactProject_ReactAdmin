import React  from "react";

import { connect } from "react-redux";
import { createSelectionAction } from "../../../redux/actions/LeftNav";

function Categories() {

  return <div>Categories</div>;
}

export default connect((state) => ({ leftNav: state.leftNav }), {
  select: createSelectionAction,
})(Categories);
