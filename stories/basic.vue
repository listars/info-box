<template>
  <div class="basic">
    <info-box 
        title="信息盒子"
        :content="content"
        :infoData="obj"></info-box>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: [
        {label: '布局测试', key: 'test'},
        {label: '姓名', key: 'name'},
        {label: '用户账号', key: 'user'},
        {label: '用户状态', key: 'status'},
        {label: '手机号码', key: 'phone'},
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
.basic {
  padding: 20px;
}
</style>

