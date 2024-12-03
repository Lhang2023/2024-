"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_cell_item2 = common_vendor.resolveComponent("u-cell-item");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_avatar2 + _easycom_u_icon2 + _easycom_u_cell_item2 + _easycom_u_cell_group2)();
}
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_cell_item = () => "../../uni_modules/vk-uview-ui/components/u-cell-item/u-cell-item.js";
const _easycom_u_cell_group = () => "../../uni_modules/vk-uview-ui/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_icon + _easycom_u_cell_item + _easycom_u_cell_group)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    common_vendor.ref("https://uviewui.com/common/logo.png");
    common_vendor.ref(true);
    const nickName = common_vendor.ref("测试");
    const picture = common_vendor.ref("");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: picture.value
      }, picture.value ? {
        b: common_vendor.p({
          src: picture.value,
          size: "100"
        })
      } : {}, {
        c: common_vendor.p({
          [" v-else"]: true,
          src: "/static/user.jpg",
          size: "100"
        }),
        d: common_vendor.t(nickName.value),
        e: common_vendor.p({
          name: "arrow-right",
          color: "#969799",
          size: "28"
        }),
        f: common_vendor.o((...args) => _ctx.toUserInfo && _ctx.toUserInfo(...args)),
        g: common_vendor.p({
          icon: "star",
          title: "我的闲置"
        }),
        h: common_vendor.p({
          icon: "photo",
          title: "我的求购"
        }),
        i: common_vendor.p({
          icon: "heart",
          title: "我的收藏"
        }),
        j: common_vendor.p({
          icon: "red-packet",
          title: "购买订单"
        }),
        k: common_vendor.p({
          icon: "order",
          title: "出售订单"
        }),
        l: common_vendor.p({
          icon: "edit-pen",
          title: "修改密码"
        }),
        m: common_vendor.o(_ctx.loginOut),
        n: common_vendor.p({
          icon: "setting",
          title: "退出账号"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/LH/Desktop/sh-transaction/source code/applet/str/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
