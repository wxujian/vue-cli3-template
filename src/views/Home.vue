<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="ces">请求数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    ces () {
      console.log(this)
      this.$server.getProjects().then((res) => { // 请求当前系统数据
        console.log(res)
        this.$store.commit('changeSingleData', { // 存值
          'singleData': res.data
        })
        console.log(this.$store)
      }).catch(err => {
        throw Error(err.message)
      })
    }
  }
}
</script>
