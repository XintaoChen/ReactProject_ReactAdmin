// entry file

import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import memoryUtils from "./utils/memoryUtils";
import storageUtils from "./utils/storageUtils";

// redux
import store from "./redux/store";
import { Provider } from "react-redux";

// update memory from local storage
memoryUtils.user = storageUtils.getUser();

// render App component to root div at index page
ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
