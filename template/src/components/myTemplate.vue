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
   let data = { page: 1, count: 2, type: 'video' };
    this.$api.test.test(data).then(res => {
      console.log(res);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
