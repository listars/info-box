import {storiesOf} from '@storybook/vue'
import Basic from './basic.vue'
import Input from './input.vue'
import Select from './select.vue'
import InitMethod from './init-method.vue'

storiesOf('info-box', module)
  .add('basic-info', () => ({
    components: {Basic},
    template: `<Basic/>`
  }))
  .add('input-info', () => ({
    components: {Input},
    template: `<Input/>`
  }))
  .add('select-info', () => ({
    components: {Select},
    template: `<Select/>`
  }))
  .add('init-method', () => ({
    components: {InitMethod},
    template: `<InitMethod/>`
  }))
