"use strict";
(self["webpackChunkstrong_search"] = self["webpackChunkstrong_search"] || []).push([[929],{

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fj": () => (/* binding */ setStorageSync),
/* harmony export */   "qu": () => (/* binding */ getStorageSync),
/* harmony export */   "nv": () => (/* binding */ resetStorageSync),
/* harmony export */   "DS": () => (/* binding */ downloadJson),
/* harmony export */   "hn": () => (/* binding */ parseJsonFile)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7965);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6016);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__);



const storage = chrome.storage.sync;
const defaultOption = {
  "triggerkey": false,
  "engines": [{
    "id": "6a1a7800-c4b9-4bc6-add1-15cef3fb4e62",
    "group": "常用",
    "name": "Google",
    "url": "https://www.google.com.tw/search?q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "b313d6ad-4d1e-434d-b6b2-c2dfb94f64e1",
    "group": "常用",
    "name": "百度",
    "url": "http://www.baidu.com/s?wd=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "0c2023a9-34d3-4f40-9693-2945c900ed4a",
    "group": "常用",
    "name": "豆瓣",
    "url": "http://www.douban.com/search?q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "275356a9-b24d-4b10-8be4-60c289c19ace",
    "group": "常用",
    "name": "知乎",
    "url": "https://www.zhihu.com/search?type=content&q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "d0af0c9b-ddae-4092-84f8-881d2a88215b",
    "group": "常用",
    "name": "淘宝",
    "url": "http://s.taobao.com/search?q=%s&sort=sale-desc",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "5526d768-0325-4e0a-b53b-130abdbcb05a",
    "group": "常用",
    "name": "bilibili",
    "url": "https://search.bilibili.com/all?keyword=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "afddc6c4-d801-48b3-a4bf-09f19e041625",
    "group": "常用",
    "name": "地图",
    "url": "https://map.baidu.com/search/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "9a9b4c0f-210e-4e16-9ae9-7be692a603cd",
    "group": "常用",
    "name": "wiki",
    "url": "https://zh.wikipedia.org/wiki/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "fe1007c2-a70e-498f-919a-9db36a5529e5",
    "group": "常用",
    "name": "微博",
    "url": "https://s.weibo.com/weibo/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "bde6a7b7-c357-433a-b76c-3cb849938af8",
    "group": "常用",
    "name": "MDN",
    "url": "https://developer.mozilla.org/zh-CN/search?q=%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "e4dfa241-2a83-4e1f-84f6-6f7dae95a632",
    "group": "购物",
    "name": "值得买",
    "url": "https://search.smzdm.com/?s=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "6bd19564-0d23-4445-807b-34f0d57fb166",
    "group": "购物",
    "name": "京东",
    "url": "https://search.jd.com/Search?keyword=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "af0a4106-c09f-42b6-b25a-5b1d213ef341",
    "group": "购物",
    "name": "亚马逊",
    "url": "http://www.amazon.cn/keywords=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "c0ac5dae-7958-48d8-ae78-b0e98ac9d1dd",
    "group": "搜索",
    "name": "必应",
    "url": "https://cn.bing.com/search?q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "19136e65-14e9-486b-9576-bc97b4240aef",
    "group": "搜索",
    "name": "Google图片",
    "url": "https://www.google.com/search?tbm=isch&q=%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "3fe0ed2d-2316-430d-b22d-079082cc0f1b",
    "group": "搜索",
    "name": "百度百科",
    "url": "https://baike.baidu.com/item/%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "43126b72-c725-48f7-8b36-d33b5361f74e",
    "group": "影音",
    "name": "豆瓣电影",
    "url": "https://search.douban.com/movie/subject_search?search_text=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "d9b2bbd2-f2eb-4432-9eba-cfa831e5d8ee",
    "group": "影音",
    "name": "YouTube",
    "url": "https://www.youtube.com/results?search_query=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "a5689041-c760-4552-b0b6-3fe0bae10da9",
    "group": "影音",
    "name": "网易音乐",
    "url": "http://music.163.com/#/search/m/?s=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "a075db15-ed14-4a75-ba2c-d82ceb8c7daf",
    "group": "影音",
    "name": "QQ音乐",
    "url": "https://y.qq.com/n/ryqq/search?w=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "731b7ac8-55ee-4761-b146-f13d68d095cb",
    "group": "影音",
    "name": "IMDb",
    "url": "https://www.imdb.com/find?q=dog",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "59876895-aed1-4119-9504-8866a08f6502",
    "group": "影音",
    "name": "腾讯视频",
    "url": "https://v.qq.com/x/search/?q=%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "b37136f3-c084-4477-88cd-ec8612a48b2f",
    "group": "影音",
    "name": "西瓜",
    "url": "https://www.ixigua.com/search/%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "22609fa3-9665-4bae-97f4-f49f0ffe68bc",
    "group": "影音",
    "name": "优酷",
    "url": "https://so.youku.com/search_video/q_%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "eb98e46c-68cb-48fb-8627-a09ba4294384",
    "group": "购物",
    "name": "1688",
    "url": "https://s.1688.com/selloffer/offer_search.htm?keywords=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "b534a6ad-0a33-49ef-80a7-ac3bd40ae7e9",
    "group": "影音",
    "name": "爱艺奇",
    "url": "https://so.iqiyi.com/so/q_%s?source=input",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "8438ec2e-f50a-49c8-a4d6-4fe20875dfde",
    "group": "购物",
    "name": "当当",
    "url": "https://search.dangdang.com/?key=%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "3c2da449-e786-4536-8e0f-f98e820773bf",
    "group": "购物",
    "name": "网易严选",
    "url": "https://you.163.com/search?keyword=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "660d2bba-c519-4d1e-93dd-82670724de55",
    "group": "购物",
    "name": "小米有品",
    "url": "https://www.xiaomiyoupin.com/search?keyword=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "2f047ca5-2d7f-4080-908c-c679c78c92fa",
    "group": "购物",
    "name": "唯品会",
    "url": "https://category.vip.com/suggest.php?keyword=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "48eeb6a6-aea7-4eb7-af0c-95ddebde849a",
    "group": "常用",
    "name": "Github",
    "url": "https://github.com/search?q=%s",
    "encode": false,
    "isnew": true,
    "enable": false
  }, {
    "id": "7dfa4db1-ed01-41b8-ab4b-24a45ea7605d",
    "group": "常用",
    "name": "翻译",
    "url": "https://fanyi.baidu.com/#en/zh/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "f1b1d116-a2d2-4492-baf8-5ea0128236c9",
    "group": "搜索",
    "name": "DuckGo",
    "url": "https://duckduckgo.com/?q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "097e78c4-e583-46d8-89b7-50148985b829",
    "group": "搜索",
    "name": "ASK",
    "url": "https://www.ask.com/web?q=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "036cb39a-a8a2-49b9-8cba-640f6e6d33de",
    "group": "搜索",
    "name": "搜狗",
    "url": "https://www.sogou.com/web?query=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "927d48ff-4620-48d3-a0c0-f1852cf2b6a6",
    "group": "搜索",
    "name": "yahoo",
    "url": "https://search.yahoo.com/search?p=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "30f04aa2-b279-4308-93fd-22a05941b7d4",
    "group": "搜索",
    "name": "贴吧",
    "url": "https://tieba.baidu.com/f/search/res?qw=%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "51670b0a-7a2d-480e-a3eb-3c6bbdf6c00c",
    "group": "翻译",
    "name": "汉典",
    "url": "https://www.zdic.net/hans/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }, {
    "id": "7eec0c20-e404-41c0-91ef-87624e2bf11f",
    "group": "翻译",
    "name": "海词",
    "url": "https://www.dict.cn/%s",
    "encode": false,
    "isnew": true,
    "enable": true
  }],
  "name": "其他引擎搜索 \"%s\""
};
const setStorageSync = async items => {
  let result = await new Promise(resolve => {
    const optionStr = JSON.stringify(items);
    let length = optionStr.length;
    var sliceLength = storage.QUOTA_BYTES_PER_ITEM / 2;
    const optionSlices = {}; // 保存分片数据

    let i = 0; // 分片序号
    // 分片保存数据

    while (length > 0) {
      optionSlices["ss_options_" + i] = optionStr.substr(i * sliceLength, sliceLength);
      length -= sliceLength;
      i++;
    } // 保存分片数量


    optionSlices["ss_options_num"] = i;
    storage.set(optionSlices, () => {
      resolve(optionSlices);
    });
  });
  return result;
};
const getStorageSync = async (keys = null) => {
  return await new Promise(resolve => {
    storage.get(keys, function (items) {
      let opts = ""; // 把分片数据组成字符串

      for (let i = 0; i < items.ss_options_num; i++) {
        opts += items["ss_options_" + i];
      }

      opts = JSON.parse(opts);
      resolve(opts);
    });
  });
};
const resetStorageSync = async () => {
  return await new Promise(resolve => {
    storage.clear(() => {
      setStorageSync(defaultOption);
      resolve(defaultOption);
    });
  });
};
const downloadJson = (content, filename) => {
  // 创建隐藏的可下载链接
  let eleLink = document.createElement("a");
  eleLink.download = filename;
  eleLink.style.display = "none";
  let blob = new Blob([content]); // 字符内容转变成 blob 地址

  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
};
const parseJsonFile = async file => {
  let buffer = await file.arrayBuffer();

  try {
    let result = await new TextDecoder().decode(buffer);
    return JSON.parse(result);
  } catch (error) {
    throw error;
  }
};

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=template&id=2db2f8b9

const _hoisted_1 = {
  class: "q-pa-md"
};
const _hoisted_2 = {
  class: "q-gutter-sm"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 如果遇到搜索引擎字符乱码，请选中\"编码\"选项。 ");

const _hoisted_4 = {
  class: "row justify-center"
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "请选择配置文件", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-checkbox");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_popup_edit = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-popup-edit");

  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-td");

  const _component_q_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toggle");

  const _component_q_tooltip = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tooltip");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_tr = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tr");

  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-table");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_file = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-file");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
    modelValue: $setup.options.triggerkey,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.options.triggerkey = $event),
    label: "需要同时按下 Ctrl 键触发"
  }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
    class: "q-my-lg"
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_table, {
    rows: $setup.options.engines,
    filter: $setup.filter,
    "row-key": "id",
    columns: $setup.columns,
    loading: $setup.loading,
    title: "引擎管理",
    pagination: $setup.pagination,
    "onUpdate:pagination": _cache[2] || (_cache[2] = $event => $setup.pagination = $event),
    "hide-pagination": ""
  }, {
    "top-right": (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      borderless: "",
      dense: "",
      debounce: "300",
      modelValue: $setup.filter,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.filter = $event),
      placeholder: "搜索"
    }, {
      append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: "search"
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    body: (0,runtime_core_esm_bundler/* withCtx */.w5)(props => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
      props: props
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "group"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.group) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_popup_edit, {
          modelValue: props.row.group,
          "onUpdate:modelValue": $event => props.row.group = $event,
          title: "编辑分组",
          buttons: "",
          "label-set": "确认",
          "label-cancel": "取消"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(scope => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            modelValue: scope.value,
            "onUpdate:modelValue": $event => scope.value = $event,
            hint: "菜单分组名称",
            onKeyup: (0,runtime_dom_esm_bundler/* withKeys */.D2)(scope.set, ["enter"]),
            dense: "",
            autofocus: "",
            counter: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "name"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.name) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_popup_edit, {
          modelValue: props.row.name,
          "onUpdate:modelValue": $event => props.row.name = $event,
          title: "编辑名称",
          buttons: "",
          "label-set": "确认",
          "label-cancel": "取消",
          validate: $setup.nameValidation,
          onHide: $setup.nameValidation
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(scope => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            modelValue: scope.value,
            "onUpdate:modelValue": $event => scope.value = $event,
            hint: "请填写名称",
            error: $setup.errorState,
            "error-message": $setup.errorMessage,
            onKeyup: (0,runtime_dom_esm_bundler/* withKeys */.D2)(scope.set, ["enter"]),
            dense: "",
            autofocus: "",
            counter: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message", "onKeyup"])]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "validate", "onHide"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "url"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.url) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_popup_edit, {
          modelValue: props.row.url,
          "onUpdate:modelValue": $event => props.row.url = $event,
          title: "编辑 URL",
          buttons: "",
          "label-set": "确认",
          "label-cancel": "取消",
          validate: $setup.urlValidation,
          onHide: $setup.urlValidation
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(scope => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            modelValue: scope.value,
            "onUpdate:modelValue": $event => scope.value = $event,
            hint: "使用变量 %s 代替关键词",
            error: $setup.errorState,
            "error-message": $setup.errorMessage,
            onKeyup: (0,runtime_dom_esm_bundler/* withKeys */.D2)(scope.set, ["enter"]),
            dense: "",
            autofocus: "",
            counter: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message", "onKeyup"])]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue", "validate", "onHide"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "enable",
        style: {
          "width": "100px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
          modelValue: props.row.enable,
          "onUpdate:modelValue": $event => props.row.enable = $event,
          "checked-icon": "check_circle_outline",
          "unchecked-icon": "highlight_off",
          color: "secondary"
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "isnew",
        style: {
          "width": "100px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
          modelValue: props.row.isnew,
          "onUpdate:modelValue": $event => props.row.isnew = $event,
          "checked-icon": "tab",
          "unchecked-icon": "tab_unselected",
          color: "secondary"
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "encode",
        style: {
          "width": "100px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, {
          anchor: "top middle",
          "transition-show": "scale",
          "transition-hide": "scale"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
          modelValue: props.row.encode,
          "onUpdate:modelValue": $event => props.row.encode = $event,
          "checked-icon": "code",
          "unchecked-icon": "code_off",
          color: "secondary"
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
        _: 2
      }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "id",
        style: {
          "width": "100px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          round: "",
          color: "accent",
          icon: "delete_forever",
          onClick: $event => $setup.removeRow(props.row.id)
        }, null, 8, ["onClick"])]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["props"])]),
    _: 1
  }, 8, ["rows", "filter", "columns", "loading", "pagination"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    class: "q-mt-md",
    color: "secondary",
    label: "添加引擎",
    onClick: $setup.addRow
  }, null, 8, ["onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: $setup.inprotDialog,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.inprotDialog = $event),
    persistent: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "min-width": "350px"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "q-pt-none"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_file, {
          color: "grey-3",
          label: "选择文件",
          outlined: "",
          modelValue: $setup.inportFile,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.inportFile = $event),
          accept: ".json",
          onInput: _cache[4] || (_cache[4] = $event => $setup.inprotButtom = false)
        }, {
          append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "attachment"
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
        align: "right",
        class: "text-primary"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          label: "确认导入",
          onClick: $setup.submitInport,
          disable: $setup.inprotButtom
        }, null, 8, ["onClick", "disable"]), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          label: "取消"
        }, null, 512), [[_directive_close_popup]])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_footer, {
    bordered: "",
    class: "bg-white q-pa-md row justify-end"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      color: "primary",
      label: "保  存",
      onClick: $setup.save
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "q-ml-md",
      color: "accent",
      label: "还原默认",
      onClick: $setup.reset
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "q-ml-md",
      color: "secondary",
      label: "导出配置",
      onClick: $setup.exportConfig
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "q-ml-md",
      color: "secondary",
      label: "导入配置",
      onClick: _cache[6] || (_cache[6] = $event => $setup.inprotDialog = true)
    })]),
    _: 1
  })]);
}
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=2db2f8b9

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__(1185);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(1224);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=script&lang=js

;

const columns = [{
  name: "group",
  align: "left",
  label: "分组名称",
  field: "group"
}, {
  name: "name",
  align: "left",
  label: "名称",
  field: "name"
}, {
  name: "url",
  align: "left",
  label: "URL",
  field: "url"
}, {
  name: "enable",
  align: "left",
  label: "是否启用",
  field: "enable"
}, {
  name: "isnew",
  align: "left",
  label: "新页面打开",
  field: "isnew"
}, {
  name: "encode",
  align: "left",
  label: "是否编码",
  field: "encode"
}, {
  name: "c",
  label: "操作",
  field: "id",
  align: "left"
}];
/* harmony default export */ const Indexvue_type_script_lang_js = ({
  async setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const pagination = (0,reactivity_esm_bundler/* ref */.iH)({
      page: 1,
      rowsPerPage: 999
    });
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const errorState = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const errorMessage = (0,reactivity_esm_bundler/* ref */.iH)("");
    const inprotDialog = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const inprotButtom = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const inportFile = (0,reactivity_esm_bundler/* ref */.iH)(null);
    let data = await (0,utils/* getStorageSync */.qu)();
    let options = (0,reactivity_esm_bundler/* reactive */.qj)(data);
    return {
      pagination,
      loading,
      columns,
      options,
      filter: (0,reactivity_esm_bundler/* ref */.iH)(""),
      errorState,
      errorMessage,
      inprotDialog,
      inportFile,
      inprotButtom,

      addRow() {
        const newRow = {
          id: "",
          group: "常用",
          name: "Name",
          url: "https://www.google.com/search?q=%s",
          encode: false,
          isnew: true,
          enable: true
        };
        newRow.id = (0,uid/* default */.Z)();
        options.engines.push(newRow);
        (0,runtime_core_esm_bundler/* nextTick */.Y3)(() => {
          scrollTo(0, document.documentElement.scrollTop + 60);
        });
      },

      removeRow(id) {
        const index = options.engines.findIndex(n => n.id === id);
        options.engines.splice(index, 1);
      },

      save() {
        $q.notify({
          message: "保存成功",
          icon: "cloud_done",
          color: "secondary"
        });
        (0,utils/* setStorageSync */.Fj)((0,reactivity_esm_bundler/* toRaw */.IU)(options));
      },

      reset() {
        $q.dialog({
          title: "提示",
          icon: "network_wifi",
          message: "确认还原默认配置？",
          cancel: true,
          ok: "确认",
          cancel: "取消"
        }).onOk(async () => {
          const reset = await (0,utils/* resetStorageSync */.nv)();
          Object.assign(options, reset);
        });
      },

      exportConfig() {
        (0,utils/* downloadJson */.DS)(JSON.stringify(options), "强悍搜索配置.json");
      },

      async submitInport() {
        const showMessage = msg => {
          $q.notify({
            type: "warning",
            message: msg,
            timeout: 4000
          });
        };

        let inportJSON = null;

        try {
          inportJSON = await (0,utils/* parseJsonFile */.hn)(inportFile.value);
        } catch (error) {
          $q.notify({
            type: "negative",
            message: "导入文件数据格式错误，请检查导入文件。",
            timeout: 4000
          });
          return;
        }

        inportFile.value = null;

        if (inportJSON === null) {
          showMessage("请导入正确的数据。");
          return;
        }

        const keyCloumn = ["triggerkey", "engines"];
        const inportKey = Object.keys(inportJSON);

        if (inportKey.length === 0) {
          showMessage("请导入正确的数据。");
          return;
        }

        while (keyCloumn.length) {
          let key = keyCloumn.shift();

          if (!inportKey.includes(key)) {
            showMessage(`文件缺少关键字：${key} ,请检查导入文件。`);
            return;
          }
        }

        const engines = inportJSON["engines"];

        if (engines === null || !Array.isArray(engines) || engines.length === 0) {
          showMessage("导入数据行不能为空，请检查导入文件。");
          return;
        }

        Object.assign(options, inportJSON);
        $q.notify({
          message: "成功导入数据~",
          icon: "cloud_done",
          color: "secondary"
        });
        (0,utils/* setStorageSync */.Fj)((0,reactivity_esm_bundler/* toRaw */.IU)(options));
      },

      nameValidation(val) {
        if (val !== undefined && val.length === 0) {
          errorState.value = true;
          errorMessage.value = "请填写名称";
          return false;
        }

        errorState.value = false;
        errorMessage.value = "";
        return true;
      },

      urlValidation(val) {
        if (val === undefined) {
          errorState.value = false;
          errorMessage.value = "";
          return true;
        }

        const reg = /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/;

        if (val.length === 0 || !reg.test(val)) {
          errorState.value = true;
          errorMessage.value = "请填写正确的URL";
          return false;
        }
      }

    };
  }

});
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(5735);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 12 modules
var QTable = __webpack_require__(4993);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__(4689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(8186);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(3884);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-edit/QPopupEdit.js + 1 modules
var QPopupEdit = __webpack_require__(1289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__(8886);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__(8870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/file/QFile.js + 1 modules
var QFile = __webpack_require__(4974);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1762);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Index.vue



Indexvue_type_script_lang_js.render = render

/* harmony default export */ const Index = (Indexvue_type_script_lang_js);
;

















runtime_auto_import_default()(Indexvue_type_script_lang_js, 'components', {QCheckbox: QCheckbox/* default */.Z,QSeparator: QSeparator/* default */.Z,QTable: QTable/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QTr: QTr/* default */.Z,QTd: QTd/* default */.Z,QPopupEdit: QPopupEdit/* default */.Z,QToggle: QToggle/* default */.Z,QTooltip: QTooltip/* default */.Z,QBtn: QBtn/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QFile: QFile/* default */.Z,QCardActions: QCardActions/* default */.Z,QFooter: QFooter/* default */.Z});runtime_auto_import_default()(Indexvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);