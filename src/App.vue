<template>
  <div>
    <h2 v-if="!repoName">loading...</h2>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      repoUrl:'',
      repoName:''
    };
  },

  mounted() {
    // 使用vue-resource发异步ajax请求
    // this.$http.get('https://api.github.com/search/repositories?q=j&sort=stars')
    // .then(
    //   response => {
    //     const result = response.data
    //     const {name,html_url} = result.items[0]
    //     //更新数据
    //     this.repoName = name
    //     this.repoUrl = html_url
    //   },
    //   error => {
    //     alert('请求失败')
    //   }
    // )
    // 使用axios发异步ajax请求
    axios.get('https://api.github.com/search/repositories?q=j&sort=stars')
    .then(
      response => {
        const result = response.data
        const {name,html_url} = result.items[0]
        //更新数据
        this.repoName = name
        this.repoUrl = html_url
      },
      error => {
        alert('请求失败')
      }
    )
  },
}
</script>

<style>
</style>
