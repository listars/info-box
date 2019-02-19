<template>
  <div class="init-method">
    <info-box 
      title="item关联初始化方法"
      v-model="form"
      label-width="80px"
      :list="list"
      :infoData="obj"
    />
    {{form}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      list: [
        {label: '布局测试', key: 'test', initFn: () => {alert('布局测试唤醒的弹窗')}},
        {
          label: '姓名',
          key: 'name',
          type: 'input',
          rules: [{required: true, message: '请输入', trigger: 'blur'}]
        },
        {label: '用户账号', key: 'user'},
        {label: '用户状态', key: 'status'},
        {label: '手机号码', key: 'phone', type: 'input'}
      ],
      obj: {
        test: '测试',
        name: 'H',
        user: 'listars',
        status: 'ON',
        phone: '15017222222'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.init-method {
  padding: 20px;
}
</style>

