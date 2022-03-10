import { SELECTION } from "../constant";

/**
 * 为组件创建一个为count组件服务的reducer，本质是一个函数
 * @param {string} preState 之前的状态
 * @param {object} action 操作的动作对象
 */

const initState = ["/home"];
export default function countReducer(preState = initState, action) {
  // 从action对象中获取：type，data
  const { type, data } = action;
  switch (type) {
    case SELECTION:
      return [...data];
    default:
      return preState;
  }
}
