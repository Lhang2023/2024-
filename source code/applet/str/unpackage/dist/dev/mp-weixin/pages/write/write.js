"use strict";
const common_vendor = require("../../common/vendor.js");
const common_index = require("../../common/index.js");
const api_good = require("../../api/good.js");
if (!Array) {
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_select2 = common_vendor.resolveComponent("u-select");
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_radio2 + _easycom_u_radio_group2 + _easycom_u_form_item2 + _easycom_u_input2 + _easycom_u_select2 + _easycom_u_upload2 + _easycom_u_form2 + _easycom_u_button2)();
}
const _easycom_u_radio = () => "../../uni_modules/vk-uview-ui/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../uni_modules/vk-uview-ui/components/u-radio-group/u-radio-group.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_select = () => "../../uni_modules/vk-uview-ui/components/u-select/u-select.js";
const _easycom_u_upload = () => "../../uni_modules/vk-uview-ui/components/u-upload/u-upload.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_radio + _easycom_u_radio_group + _easycom_u_form_item + _easycom_u_input + _easycom_u_select + _easycom_u_upload + _easycom_u_form + _easycom_u_button)();
}
const _sfc_main = {
  __name: "write",
  setup(__props) {
    const form1 = common_vendor.ref();
    const addModel = common_vendor.reactive({
      userId: common_vendor.index.getStorageSync("userId"),
      name: "",
      type: "",
      goodsName: "",
      categoryId: "",
      categoryName: "",
      goodsDesc: "",
      goodsPrice: "",
      userName: "",
      phone: "",
      wxNum: "",
      image: "",
      address: ""
    });
    const list = [
      {
        value: "0",
        name: "闲置",
        disabled: false
      },
      {
        value: "1",
        name: "求购",
        disabled: false
      }
    ];
    const rules = common_vendor.reactive({
      name: [{
        required: true,
        message: "请选择类型",
        trigger: ["change", "blur"]
      }],
      goodsName: [{
        required: true,
        message: "请填写名称",
        trigger: ["change", "blur"]
      }],
      goodsDesc: [{
        required: true,
        message: "请填写描述",
        trigger: ["change", "blur"]
      }],
      goodsPrice: [{
        required: true,
        message: "请填写价格",
        trigger: ["change", "blur"]
      }],
      userName: [{
        required: true,
        message: "请填写姓名",
        trigger: ["change", "blur"]
      }],
      phone: [{
        required: true,
        message: "请填写电话",
        trigger: ["change", "blur"]
      }],
      wxNum: [{
        required: true,
        message: "请填写微信号",
        trigger: ["change", "blur"]
      }],
      address: [{
        required: true,
        message: "请填写发布/求购地址",
        trigger: ["change", "blur"]
      }]
    });
    common_vendor.ref("");
    common_vendor.ref([]);
    const customStyle = common_vendor.reactive({
      background: "#FF7670",
      color: "#FFF",
      marginTop: "50px",
      width: "100%"
    });
    const action = common_vendor.ref(common_index.http.baseUrl + "/api/upload/uploadImage");
    const imgUrl = common_vendor.ref([]);
    const onChange = (res, index, lists, name) => {
      console.log(res);
      if (res.data) {
        try {
          let result = JSON.parse(res.data);
          if (result.data) {
            imgUrl.value.push(common_index.http.baseUrl + result.data);
            addModel.image = imgUrl.value.join(",");
            console.log(addModel);
          } else {
            console.error("Invalid data format in the response");
          }
        } catch (error) {
          console.error("Error parsing JSON data:", error);
        }
      } else {
        console.error("Empty data received");
      }
    };
    const onRemove = (index) => {
      let url = "";
      for (let k = 0; k < imgUrl.value.length; k++) {
        url = url + imgUrl.value[k] + ",";
      }
      addModel.image = url.substring(0, url.lastIndexOf(","));
      console.log(addModel);
    };
    const show = common_vendor.ref(false);
    const selectList = common_vendor.ref([]);
    const getSelectList = async () => {
      let res = await api_good.categoryApi();
      if (res && res.code == 200) {
        console.log(res);
        selectList.value = res.data;
      }
    };
    const openSelect = () => {
      show.value = true;
    };
    const selectConfirm = (e) => {
      console.log(e);
      addModel.categoryName = e[0].label;
      addModel.categoryId = e[0].value;
    };
    const commit = () => {
      form1.value.validate(async (valid) => {
        console.log(valid);
        if (valid) {
          let res = await api_good.releaseApi(addModel);
          if (res && res.code === 200) {
            console.log(res);
            common_vendor.index.switchTab({
              url: "../index/index"
            });
          }
        }
      });
      console.log(addModel);
    };
    const radioChange = (e) => {
      console.log(e);
      for (let i = 0; i < list.length; i++) {
        if (list[i].name == e) {
          addModel.type = list[i].value;
        }
      }
    };
    common_vendor.onReady(() => {
      form1.value.setRules(rules);
      getSelectList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(radioChange, index),
            c: index,
            d: "30e378b2-3-" + i0 + ",30e378b2-2",
            e: common_vendor.p({
              activeColor: "#FF7670",
              name: item.name,
              disabled: item.disabled
            })
          };
        }),
        b: common_vendor.o(($event) => addModel.name = $event),
        c: common_vendor.p({
          modelValue: addModel.name
        }),
        d: common_vendor.p({
          prop: "name",
          label: "类型:"
        }),
        e: common_vendor.o(($event) => addModel.goodsName = $event),
        f: common_vendor.p({
          placeholder: "请输入名称",
          modelValue: addModel.goodsName
        }),
        g: common_vendor.p({
          prop: "goodsName",
          label: "名称:"
        }),
        h: common_vendor.o(openSelect),
        i: common_vendor.o(($event) => addModel.categoryName = $event),
        j: common_vendor.p({
          placeholder: "请选择分类",
          modelValue: addModel.categoryName
        }),
        k: common_vendor.o(selectConfirm),
        l: common_vendor.o(($event) => show.value = $event),
        m: common_vendor.p({
          list: selectList.value,
          modelValue: show.value
        }),
        n: common_vendor.p({
          prop: "categoryName",
          label: "分类:"
        }),
        o: common_vendor.o(($event) => addModel.goodsDesc = $event),
        p: common_vendor.p({
          placeholder: "请输入简介",
          modelValue: addModel.goodsDesc
        }),
        q: common_vendor.p({
          prop: "goodsDesc",
          label: "简介:"
        }),
        r: common_vendor.o(($event) => addModel.goodsPrice = $event),
        s: common_vendor.p({
          placeholder: "请输入价格",
          modelValue: addModel.goodsPrice
        }),
        t: common_vendor.p({
          prop: "goodsPrice",
          label: "价格:"
        }),
        v: common_vendor.o(($event) => addModel.userName = $event),
        w: common_vendor.p({
          placeholder: "请输入联系人",
          modelValue: addModel.userName
        }),
        x: common_vendor.p({
          prop: "userName",
          ["label-width"]: "auto",
          label: "联系人:"
        }),
        y: common_vendor.o(($event) => addModel.phone = $event),
        z: common_vendor.p({
          placeholder: "请输入联系电话",
          modelValue: addModel.phone
        }),
        A: common_vendor.p({
          prop: "phone",
          ["label-width"]: "auto",
          label: "联系电话:"
        }),
        B: common_vendor.o(($event) => addModel.wxNum = $event),
        C: common_vendor.p({
          placeholder: "请输入微信号",
          modelValue: addModel.wxNum
        }),
        D: common_vendor.p({
          prop: "wxNum",
          ["label-width"]: "auto",
          label: "微信号:"
        }),
        E: common_vendor.o(($event) => addModel.address = $event),
        F: common_vendor.p({
          modelValue: addModel.address
        }),
        G: common_vendor.p({
          prop: "address",
          ["label-width"]: "auto",
          label: "联系地址:"
        }),
        H: common_vendor.p({
          prop: "image",
          label: "图片:"
        }),
        I: common_vendor.o(onRemove),
        J: common_vendor.o(onChange),
        K: common_vendor.p({
          action: action.value,
          ["auto-upload"]: true
        }),
        L: common_vendor.sr(form1, "30e378b2-0", {
          "k": "form1"
        }),
        M: common_vendor.p({
          model: addModel
        }),
        N: common_vendor.o(commit),
        O: common_vendor.p({
          ["custom-style"]: customStyle
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/LH/Desktop/sh-transaction/source code/applet/str/pages/write/write.vue"]]);
wx.createPage(MiniProgramPage);
