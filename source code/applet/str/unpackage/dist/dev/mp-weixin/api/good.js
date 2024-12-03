"use strict";
const common_index = require("../common/index.js");
const categoryApi = (parm) => {
  return common_index.http.get("/api/category/getSelectList", parm);
};
const releaseApi = (parm) => {
  return common_index.http.post("/api/goods/release", parm);
};
const getCateListApi = () => {
  return common_index.http.get("/api/category/getCateList");
};
const getUsedListApi = (parm) => {
  return common_index.http.get("/api/goods/getUsedList", parm);
};
const getBuyListApi = (parm) => {
  return common_index.http.get("/api/goods/getBuyList", parm);
};
exports.categoryApi = categoryApi;
exports.getBuyListApi = getBuyListApi;
exports.getCateListApi = getCateListApi;
exports.getUsedListApi = getUsedListApi;
exports.releaseApi = releaseApi;
