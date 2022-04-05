import { EDIT } from "../constant";
import { EDIT_NAME } from "../constant";
import { EDIT_ID } from "../constant";

export const createEditAction = (data) => ({ type: EDIT, data });
export const createEditNameAction = (data) => ({ type: EDIT_NAME, data });
export const createEditIdAction = (data) => ({ type: EDIT_ID, data });
