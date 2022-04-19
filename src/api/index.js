/**
 * index of all api interface function
 */

import ajax from "./ajax";
const POST = "POST";
const GET = "GET";

// Login
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, POST);

// User
export const reqAddUser = (user) => ajax("/manage/user/add", user, POST);

// Category
export const reqCategories = (parentId) =>
  ajax("/manage/category/list", { parentId }, GET);

export const reqAddCategory = (name, parentId) =>
  ajax("/manage/category/add", { name, parentId }, POST);

export const reqUpdateCategory = (categoryId, categoryName) =>
  ajax("/manage/category/update", { categoryId, categoryName }, POST);

export const reqDeleteCategory = (categoryId) =>
  ajax("/manage/category/delete", { categoryId }, POST);

// Product
export const reqProducts = (pageNum, pageSize) =>
  ajax("/manage/product/list", { pageNum, pageSize }, GET);

export const reqSearchProducts = (pageNum, pageSize, keyword, searchType) =>
  ajax(
    "/manage/product/search",
    { pageNum, pageSize, [searchType]: keyword },
    GET
  );
