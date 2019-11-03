<template>
  <div class="hello">
    我的模版
  </div>
</template>

<script>
export default {
  name: 'mytemplate',
  data () {
    return {
      msg: ''
    }
  },
  created() {
    this.$api.login.login('123').then(res=>{
      console.log(res);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
