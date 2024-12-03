"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_steps2 = common_vendor.resolveComponent("u-steps");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_swiper2 + _easycom_u_steps2 + _easycom_u_icon2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_u_button2 + _easycom_u_popup2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_steps = () => "../../uni_modules/vk-uview-ui/components/u-steps/u-steps.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_popup = () => "../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_steps + _easycom_u_icon + _easycom_u_input + _easycom_u_form_item + _easycom_u_form + _easycom_u_button + _easycom_u_popup)();
}
const _sfc_main = {
  __name: "buy_detail",
  setup(__props) {
    const customStyle = common_vendor.reactive({
      background: "#FF7670"
    });
    const height = common_vendor.ref("350");
    common_vendor.ref(true);
    common_vendor.ref(true);
    const interval = common_vendor.ref(2e3);
    const duration = common_vendor.ref(500);
    const numlist = common_vendor.ref([{
      name: "发布信息"
    }, {
      name: "电话/微信沟通"
    }, {
      name: "当面交易"
    }, {
      name: "交易完成"
    }]);
    const goodsId = common_vendor.ref("");
    const goodsName = common_vendor.ref("");
    const goodsPrice = common_vendor.ref("");
    const goodsDesc = common_vendor.ref("");
    const address = common_vendor.ref("");
    const wxNum = common_vendor.ref("");
    const phone = common_vendor.ref("");
    const swipperList = common_vendor.ref([{
      image: "/static/summer.webp"
    }, {
      image: "/static/summer.webp"
    }, {
      image: "/static/summer.webp"
    }]);
    const createTime = common_vendor.ref("");
    const toHome = () => {
      common_vendor.index.switchTab({
        url: "../index/index"
      });
    };
    const callPhone = () => {
      common_vendor.index.makePhoneCall({
        phoneNumber: phone.value,
        success: (res) => {
        },
        fail: (res) => {
        }
      });
    };
    const show = common_vendor.ref(false);
    const toBuy = () => {
      show.value = true;
    };
    const addModel = common_vendor.reactive({
      price: ""
    });
    const cancel = () => {
      show.value = false;
    };
    const confirm = () => {
      show.value = false;
    };
    const reportShow = common_vendor.ref(false);
    const toRepory = () => {
      reportShow.value = true;
    };
    const reportModel = common_vendor.reactive({
      reason: ""
    });
    const reportCancel = () => {
      reportShow.value = false;
    };
    const reportConfirm = () => {
      reportShow.value = false;
    };
    common_vendor.onLoad((options) => {
      console.log(options);
      const goods = JSON.parse(options.goods);
      console.log(goods);
      goodsId.value = goods.goodsId;
      addModel.goodsId = goods.goodsId;
      goodsName.value = goods.goodsName;
      goodsDesc.value = goods.goodsDesc;
      address.value = goods.address;
      goodsPrice.value = goods.goodsPrice;
      createTime.value = goods.createTime;
      phone.value = goods.phone;
      wxNum.value = goods.wxNum;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "image",
          ["border-radius"]: "1",
          duration: duration.value,
          interval: interval.value,
          height: height.value,
          list: swipperList.value
        }),
        b: common_vendor.t(goodsName.value),
        c: common_vendor.t(goodsPrice.value),
        d: common_vendor.t(goodsDesc.value),
        e: common_vendor.t(address.value),
        f: common_vendor.p({
          ["active-color"]: "#FF7670",
          mode: "number",
          list: numlist.value,
          current: 4
        }),
        g: common_vendor.t(createTime.value),
        h: common_vendor.t(phone.value),
        i: common_vendor.t(wxNum.value),
        j: common_vendor.p({
          name: "home",
          size: 40
        }),
        k: common_vendor.o(toHome),
        l: common_vendor.p({
          size: 40,
          name: "star"
        }),
        m: common_vendor.p({
          name: "info-circle",
          size: 40
        }),
        n: common_vendor.o(toRepory),
        o: common_vendor.o(callPhone),
        p: common_vendor.o(toBuy),
        q: common_vendor.p({
          vmodel: "addModel.price"
        }),
        r: common_vendor.p({
          label: "请输入交易金额",
          prop: "price"
        }),
        s: common_vendor.sr("form1", "5f789f1c-6,5f789f1c-5"),
        t: common_vendor.p({
          ["label-width"]: "auto",
          model: addModel
        }),
        v: common_vendor.o(cancel),
        w: common_vendor.p({
          type: "info"
        }),
        x: common_vendor.o(confirm),
        y: common_vendor.p({
          customstyle: customStyle,
          type: "error"
        }),
        z: common_vendor.o(($event) => show.value = $event),
        A: common_vendor.p({
          ["mask-close-able"]: false,
          ["border-radius"]: "15",
          width: "85%",
          height: "200px",
          mode: "center",
          modelValue: show.value
        }),
        B: common_vendor.p({
          vmodel: "addModel.reason"
        }),
        C: common_vendor.p({
          label: "请输入举报原因",
          prop: "reason"
        }),
        D: common_vendor.sr("form1", "5f789f1c-12,5f789f1c-11"),
        E: common_vendor.p({
          ["label-width"]: "auto",
          model: reportModel
        }),
        F: common_vendor.o(reportCancel),
        G: common_vendor.p({
          type: "info"
        }),
        H: common_vendor.o(reportConfirm),
        I: common_vendor.p({
          ["custom-style"]: customStyle,
          type: "error"
        }),
        J: common_vendor.o(($event) => reportShow.value = $event),
        K: common_vendor.p({
          ["mask-close-able"]: false,
          ["border-radius"]: "15",
          width: "85%",
          height: "200px",
          mode: "center",
          modelValue: reportShow.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/LH/Desktop/sh-transaction/source code/applet/str/pages/buy_detail/buy_detail.vue"]]);
wx.createPage(MiniProgramPage);
