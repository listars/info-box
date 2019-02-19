<template>
  <div class="select">
    <info-box 
      title="信息混合表单"
      v-model="form"
      label-width="80px"
      all-default-span="8"
      :content="content"
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
      content: [
        {label: '布局测试', key: 'test'},
        {
          label: '姓名',
          key: 'name',
          type: 'input',
          rules: [{required: true, message: '请输入', trigger: 'blur'}]
        },
        {label: '用户账号', key: 'user'},
        {label: '用户状态', key: 'status', type: 'select', options: [{label: '开启', value: 'ON'}, {label: '关闭', value: 'OFF'}]},
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
.select {
  padding: 20px;
}
</style>