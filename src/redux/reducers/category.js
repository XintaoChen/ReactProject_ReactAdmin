import { EDIT } from "../constant";
import { EDIT_NAME } from "../constant";
import { EDIT_ID } from "../constant";

const initState = { name: "defaultName" };
export default function categoryReducer(preState = initState, action) {
  // 从action对象中获取：type，data
  const { type, data } = action;
  switch (type) {
    case EDIT:
      return { ...data };
    case EDIT_NAME:
      return { ...preState, name: data };
    case EDIT_ID:
      return { ...preState, _id: data };
    default:
      return preState;
  }
}
