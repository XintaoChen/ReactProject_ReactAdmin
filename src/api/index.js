/**
 * index of all api interface function
 */

import ajax from "./ajax";

export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");

export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

export const reqCategories = (parentId) =>
  ajax("/manage/category/list", { parentId }, "GET");

export const reqAddCategory = (categoryName, parentId) =>
  ajax("/manage/catagory/add", (categoryName, parentId), "POST");

export const reqUpdateCategory = (categoryId, categoryName) =>
  ajax("/manage/category/update", { categoryId, categoryName }, "POST");
