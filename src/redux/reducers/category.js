import { EDIT, EDIT_STATUS, EDIT_NAME, EDIT_ID } from "../constant";

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
    case EDIT_STATUS:
      return { ...preState, status: data };
    default:
      return preState;
  }
}
