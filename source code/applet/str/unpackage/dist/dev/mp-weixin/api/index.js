"use strict";
const common_index = require("../common/index.js");
const getIndexListApi = (parm) => {
  return common_index.http.get("/api/goods/getIndexList", parm);
};
exports.getIndexListApi = getIndexListApi;
