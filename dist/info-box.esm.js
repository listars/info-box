(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".info-box .info-col-0[data-v-1d41d9f6] { width: 0%; } .info-box .info-col-1[data-v-1d41d9f6] { width: 4.166666666666666%; } .info-box .info-col-2[data-v-1d41d9f6] { width: 8.333333333333332%; } .info-box .info-col-3[data-v-1d41d9f6] { width: 12.5%; } .info-box .info-col-4[data-v-1d41d9f6] { width: 16.666666666666664%; } .info-box .info-col-5[data-v-1d41d9f6] { width: 20.833333333333332%; } .info-box .info-col-6[data-v-1d41d9f6] { width: 25%; } .info-box .info-col-7[data-v-1d41d9f6] { width: 29.166666666666664%; } .info-box .info-col-8[data-v-1d41d9f6] { width: 33.33333333333333%; } .info-box .info-col-9[data-v-1d41d9f6] { width: 37.5%; } .info-box .info-col-10[data-v-1d41d9f6] { width: 41.666666666666664%; } .info-box .info-col-11[data-v-1d41d9f6] { width: 45.83333333333333%; } .info-box .info-col-12[data-v-1d41d9f6] { width: 50%; } .info-box .info-col-13[data-v-1d41d9f6] { width: 54.166666666666664%; } .info-box .info-col-14[data-v-1d41d9f6] { width: 58.33333333333333%; } .info-box .info-col-15[data-v-1d41d9f6] { width: 62.5%; } .info-box .info-col-16[data-v-1d41d9f6] { width: 66.66666666666666%; } .info-box .info-col-17[data-v-1d41d9f6] { width: 70.83333333333333%; } .info-box .info-col-18[data-v-1d41d9f6] { width: 75%; } .info-box .info-col-19[data-v-1d41d9f6] { width: 79.16666666666666%; } .info-box .info-col-20[data-v-1d41d9f6] { width: 83.33333333333333%; } .info-box .info-col-21[data-v-1d41d9f6] { width: 87.5%; } .info-box .info-col-22[data-v-1d41d9f6] { width: 91.66666666666666%; } .info-box .info-col-23[data-v-1d41d9f6] { width: 95.83333333333333%; } .info-box .info-col-24[data-v-1d41d9f6] { width: 100%; } .info-box .title[data-v-1d41d9f6] { padding-bottom: 16px; margin-bottom: 20px; border-bottom: 1px solid #999; } .info-box .info-row[data-v-1d41d9f6] { margin: 0 -12px; position: relative; box-sizing: border-box; } .info-box .info-row[data-v-1d41d9f6]::after { clear: both; } .info-box .info-row[data-v-1d41d9f6]::after, .info-box .info-row[data-v-1d41d9f6]::before { display: table; content: ''; } .info-box .info-row .info-col[data-v-1d41d9f6] { padding-left: 12px; padding-right: 12px; float: left; box-sizing: border-box; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var Component = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return !!_vm.content.length ? _c('section', { staticClass: "info-box" }, [_vm.title ? _c('h2', { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('el-form', { ref: "infoForm", staticClass: "info-row", attrs: { "label-position": "left", "label-width": _vm.labelWidth, "model": _vm.form } }, [_vm._l(_vm.content, function (item, index) {
      return _c('div', { key: index, staticClass: "info-col", class: 'info-col-' + (item.span || _vm.allDefaultSpan) }, [_c('el-form-item', { attrs: { "label": item.label + ':', "rules": item.rules, "prop": item.key } }, [item.type === 'input' ? [_c('el-input', { directives: [{ name: "init", rawName: "v-init", value: { initFn: item.initFn }, expression: "{initFn: item.initFn}" }], attrs: { "placeholder": "请输入" }, on: { "change": function change($event) {
            item.onChange && item.onChange($event);
          } }, model: { value: _vm.form[item.key], callback: function callback($$v) {
            _vm.$set(_vm.form, item.key, $$v);
          }, expression: "form[item.key]" } })] : item.type === 'select' ? [_c('el-select', { directives: [{ name: "init", rawName: "v-init", value: { initFn: item.initFn }, expression: "{initFn: item.initFn}" }], attrs: { "placeholder": "请选择" }, on: { "change": function change($event) {
            item.onChange && item.onChange($event);
          } }, model: { value: _vm.form[item.key], callback: function callback($$v) {
            _vm.$set(_vm.form, item.key, $$v);
          }, expression: "form[item.key]" } }, [item.options ? _vm._l(item.options, function (option, i) {
        return _c('el-option', { key: i, attrs: { "label": option[item.optionsLabelKey || 'label'], "value": option[item.optionsValueKey || 'value'] } });
      }) : _vm._e()], 2)] : [_c('span', { directives: [{ name: "init", rawName: "v-init", value: { initFn: item.initFn }, expression: "{initFn: item.initFn}" }], staticClass: "info-value" }, [_vm._v(_vm._s(item.formatter && item.formatter(_vm.infoData) || _vm.infoData[item.key]))])]], 2)], 1);
    }), _vm._v(" "), _vm._t("default")], 2)], 1) : _vm._e();
  }, staticRenderFns: [], _scopeId: 'data-v-1d41d9f6',
  name: 'info-box',
  model: {
    prop: 'form'
  },
  props: {
    /**
     * 表单数据对象
     */
    form: {
      type: Object,
      default: function _default() {}
    },
    /**
     * 头部标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 信息列表属性设置，格式为 [{label: 'xxx', key: 'xxx'}]
     */
    content: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * 信息展示的数据
     */
    infoData: {
      type: Object,
      default: function _default() {}
    },
    /**
     * 栅格占据的列数, 总计是24
     */
    allDefaultSpan: {
      type: [Number, String],
      default: 8
    },
    /**
     * 表单域标签的宽度
     */
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  data: function data() {
    return {};
  },

  directives: {
    init: {
      inserted: function inserted(el, binding) {
        if (binding.value.initFn) binding.value.initFn();
      }
    }
  }
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('InfoBox', Component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install

  // To auto-install when vue is found
};var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default Component;
export { install };
