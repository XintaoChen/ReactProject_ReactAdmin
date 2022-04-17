import { EDIT } from "../constant";
import { EDIT_NAME } from "../constant";
import { EDIT_ID } from "../constant";
import { EDIT_STATUS } from "../constant";

export const createEditAction = (data) => ({ type: EDIT, data });
export const createEditNameAction = (data) => ({ type: EDIT_NAME, data });
export const createEditIdAction = (data) => ({ type: EDIT_ID, data });
export const createEditStatusAction = (data) => ({ type: EDIT_STATUS, data });
