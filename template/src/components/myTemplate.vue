<template>
  <div class="hello">
    我的模版
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created() {
    this.$api.login.login(params).then(res=>{
      console.log(res);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
