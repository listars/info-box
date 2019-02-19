<template>
  <section class="info-box" v-if="!!list.length">
    <h2 v-if="title" class="title">{{ title }}</h2>
    <div class="info-row">
      <el-form 
        ref="infoForm" 
        label-position="left"
        :label-width="labelWidth"
        :model="form"
      >
        <div 
          :class="`info-col-${item.span || allDefaultSpan}`"
          class="info-col"
          v-for="(item, index) in list" 
          :key="index"
        >
          <el-form-item
            :label="`${item.label}:`"
            :rules="item.rules"
            :prop="item.key"
          >
            <!-- input模块 -->
            <template v-if="item.type === 'input'">
              <el-input
                v-model="form[item.key]"
                v-init="{initFn: item.initFn}"
                @change="item.onChange && item.onChange($event)"
                placeholder="请输入"
              ></el-input>
            </template>

            <!-- select模块 -->
            <template v-else-if="item.type === 'select'">
              <el-select 
                v-model="form[item.key]"
                v-init="{initFn: item.initFn}"
                placeholder="请选择" 
                @change="item.onChange && item.onChange($event)"
              >
                <template v-if="item.options">
                  <el-option
                    v-for="(option, i) in item.options"
                    :key="i"
                    :label="option[item.optionsLabelKey || 'label']"
                    :value="option[item.optionsValueKey || 'value']"
                  />
                </template>
              </el-select>
            </template>

            <!-- 文本模块 -->
            <template v-else>
              <span class="info-value" v-init="{initFn: item.initFn}">{{
                (item.formatter && item.formatter(infoData)) ||
                  infoData[item.key]
              }}</span>
            </template>
          </el-form-item>
        </div>
        <slot> </slot>
      </el-form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'info-box',
  model: {
    prop: 'form'
  },
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    infoData: {
      type: Object,
      default: () => {}
    },
    allDefaultSpan: {
      type: [Number, String],
      default: 8
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  data() {
    return {}
  },
  directives: {
    init: {
      inserted(el, binding) {
        if(binding.value.initFn) binding.value.initFn()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.info-box {
  for $i in (0...25) {
    .info-col-{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }
  }
  .title {  
    padding-bottom: 16px;
    margin-bottom: 20px;
    border-bottom: 1px solid #999;
  }

  .info-row {
    margin: 0 -12px;
    position: relative;
    box-sizing: border-box;

    &::after {
      clear: both;
    }

    &::after, &::before {
      display: table;
      content: '';
    }

    .info-col {
      padding-left: 12px;
      padding-right: 12px;
      float: left;
      box-sizing: border-box;
    }
  }
}
</style>