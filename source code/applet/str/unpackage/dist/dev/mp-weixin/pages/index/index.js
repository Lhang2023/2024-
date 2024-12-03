"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../common/index.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_lazy_load2 = common_vendor.resolveComponent("u-lazy-load");
  const _easycom_u_waterfall2 = common_vendor.resolveComponent("u-waterfall");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_search2 + _easycom_u_lazy_load2 + _easycom_u_waterfall2 + _easycom_u_loadmore2)();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_lazy_load = () => "../../uni_modules/vk-uview-ui/components/u-lazy-load/u-lazy-load.js";
const _easycom_u_waterfall = () => "../../uni_modules/vk-uview-ui/components/u-waterfall/u-waterfall.js";
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_lazy_load + _easycom_u_waterfall + _easycom_u_loadmore)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const indicatorDots = common_vendor.ref(true);
    common_vendor.ref("#FFF");
    const autoplay = common_vendor.ref(true);
    const interval = common_vendor.ref(2e3);
    const duration = common_vendor.ref(500);
    common_vendor.ref([]);
    const flowList = common_vendor.ref([]);
    const loadStatus = common_vendor.ref("loadmore");
    const currentPage = common_vendor.ref(1);
    const pageSize = common_vendor.ref(10);
    const pages = common_vendor.ref(0);
    const keywords = common_vendor.ref("");
    const getIndexList = async () => {
      let res = await api_index.getIndexListApi({ currentPage: currentPage.value, pageSize: pageSize.value, keywords: keywords.value });
      if (res && res.code == 200) {
        pages.value = res.data.pages;
        flowList.value = flowList.value.concat(res.data.records);
        loadStatus.value = "loadmore";
      }
    };
    const toDetail = (item) => {
      if (item.type == "0") {
        common_vendor.index.navigateTo({
          url: "../unused_detail/unused_detail?goods=" + JSON.stringify(item)
        });
      } else {
        common_vendor.index.navigateTo({
          url: "../buy_detail/buy_detail?goods=" + JSON.stringify(item)
        });
      }
    };
    const loadMore = () => {
      console.log("点击加载更多");
      if (currentPage.value >= pages.value) {
        loadStatus.value = "nomore";
        return;
      }
      loadStatus.value = "loading";
      currentPage.value = ++currentPage.value;
      getIndexList();
    };
    common_vendor.onReachBottom(() => {
      console.log("触底加载更多");
      if (currentPage.value >= pages.value) {
        loadStatus.value = "nomore";
        return;
      }
      loadStatus.value = "loading";
      currentPage.value = ++currentPage.value;
      getIndexList();
    });
    const uWaterfall1 = common_vendor.ref();
    const searchList = () => {
      uWaterfall1.value.clear();
      currentPage.value = 1;
      loadStatus.value = "loading";
      getIndexList();
    };
    common_vendor.onReady(() => {
      getIndexList();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o((...args) => _ctx.imageError && _ctx.imageError(...args)),
        b: common_vendor.o((...args) => _ctx.imageError && _ctx.imageError(...args)),
        c: common_vendor.o((...args) => _ctx.imageError && _ctx.imageError(...args)),
        d: indicatorDots.value,
        e: autoplay.value,
        f: interval.value,
        g: duration.value,
        h: common_vendor.o(searchList),
        i: common_vendor.o(($event) => keywords.value = $event),
        j: common_vendor.p({
          ["bg-color"]: "#FFF",
          margin: "8px",
          ["show-action"]: true,
          ["action-text"]: "搜索",
          animation: true,
          modelValue: keywords.value
        }),
        k: flowList.value.length > 0
      }, flowList.value.length > 0 ? {
        l: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return common_vendor.e({
                a: common_vendor.o(($event) => toDetail(item), index),
                b: "57c1d550-2-" + i0 + "-" + i1 + ",57c1d550-1",
                c: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.image,
                  index
                }),
                d: common_vendor.t(item.goodsName),
                e: common_vendor.t(item.goodsPrice),
                f: common_vendor.t(item.address),
                g: item.type == "0"
              }, item.type == "0" ? {} : {}, {
                h: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "l",
          vueId: "57c1d550-1"
        }),
        m: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return common_vendor.e({
                a: common_vendor.o(($event) => toDetail(item), index),
                b: "57c1d550-3-" + i0 + "-" + i1 + ",57c1d550-1",
                c: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.image,
                  index
                }),
                d: common_vendor.t(item.goodsName),
                e: common_vendor.t(item.goodsPrice),
                f: common_vendor.t(item.address),
                g: item.type == "0"
              }, item.type == "0" ? {} : {}, {
                h: index
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "m",
          vueId: "57c1d550-1"
        }),
        n: common_vendor.sr(uWaterfall1, "57c1d550-1", {
          "k": "uWaterfall1"
        }),
        o: common_vendor.o(($event) => flowList.value = $event),
        p: common_vendor.p({
          modelValue: flowList.value
        })
      } : {}, {
        q: common_vendor.o(loadMore),
        r: common_vendor.p({
          ["bg-color"]: "rgb(240, 240, 240)",
          status: loadStatus.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/LH/Desktop/sh-transaction/source code/applet/str/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
