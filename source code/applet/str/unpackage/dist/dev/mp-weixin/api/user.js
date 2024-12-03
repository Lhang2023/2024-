"use strict";
const common_index = require("../common/index.js");
const registerApi = (parm) => {
  return common_index.http.post("/api/wxUser/register", parm);
};
const loginApi = (parm) => {
  return common_index.http.post("/api/wxUser/login", parm);
};
exports.loginApi = loginApi;
exports.registerApi = registerApi;
