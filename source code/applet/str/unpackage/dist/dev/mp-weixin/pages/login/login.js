"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../common/index.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_avatar2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_button2 + _easycom_u_form2)();
}
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_input + _easycom_u_form_item + _easycom_u_button + _easycom_u_form)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const loginModel = common_vendor.reactive({
      username: "",
      password: ""
    });
    const customStyle1 = common_vendor.reactive({
      marginTop: "40px",
      background: "#FF7670",
      color: "#FFF",
      width: "100%"
    });
    common_vendor.reactive({
      marginTop: "35px",
      // background:'#FF7670',
      color: "#FFF",
      width: "100%"
    });
    const toRegister = () => {
      common_vendor.index.navigateTo({
        url: "../register/register"
      });
    };
    const toCommit = async () => {
      if (!loginModel.username) {
        common_vendor.index.showToast({
          title: "请输入账号",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      if (!loginModel.password) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      try {
        let res = await api_user.loginApi(loginModel);
        if (res && res.errno === 1001) {
          common_vendor.index.showToast({
            title: "登录失败，请检查账号和密码",
            icon: "none",
            duration: 2e3
          });
        } else if (res && res.code === 200) {
          console.log(res);
          common_vendor.index.setStorageSync("userId", res.data.userId);
          common_vendor.index.switchTab({
            url: "../index/index"
          });
        } else {
          common_vendor.index.showToast({
            title: "登录失败，请稍后重试",
            icon: "none",
            duration: 2e3
          });
        }
      } catch (error) {
        console.error("登录请求失败:", error);
        common_vendor.index.showToast({
          title: "登录请求失败，请稍后重试",
          icon: "none",
          duration: 2e3
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "140",
          src: "/static/mine.png",
          mode: "circle"
        }),
        b: common_vendor.o(($event) => loginModel.username = $event),
        c: common_vendor.p({
          placeholder: "请输入账户",
          modelValue: loginModel.username
        }),
        d: common_vendor.p({
          ["left-icon"]: "account-fill",
          ["left-icon-style"]: "font-size:24px; color:#FF7670;"
        }),
        e: common_vendor.o(($event) => loginModel.password = $event),
        f: common_vendor.p({
          placeholder: "请输入密码",
          modelValue: loginModel.password
        }),
        g: common_vendor.p({
          ["left-icon"]: "lock",
          ["left-icon-style"]: "font-size:24px; color:#FF7670;"
        }),
        h: common_vendor.o(toCommit),
        i: common_vendor.p({
          ["custom-style"]: customStyle1
        }),
        j: common_vendor.o(toRegister),
        k: common_vendor.p({
          type: "success",
          ["custom-style"]: customStyle1
        }),
        l: common_vendor.sr("form1", "b2d12374-1"),
        m: common_vendor.p({
          model: loginModel
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/LH/Desktop/sh-transaction/source code/applet/str/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
