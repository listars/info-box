import {configure} from '@storybook/vue'

import Vue from 'vue'
import {
  Form,
  FormItem,
  Input,
  Select,
  Option
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Import your component
import Component from '../src/index'

// Register your component
Vue.component('info-box', Component)
Vue.component('el-form', Form)
Vue.component('el-form-item', FormItem)
Vue.component('el-input', Input)
Vue.component('el-select', Select)
Vue.component('el-option', Option)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)
