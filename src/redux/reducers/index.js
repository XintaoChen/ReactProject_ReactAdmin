import { combineReducers } from "redux";
import LeftNav from "./LeftNav";

// 汇总所有的reducers
export default combineReducers({
  // 重点目录 redux存的对象的key名，用于connect函数调用对应state
  leftNav: LeftNav,
});
