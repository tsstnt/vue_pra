<template>
  <div>
    <p>cliked {{count}}times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementifOdd">increment if Odd</button>
    <button @click="incrementAsync">increment Async</button>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        count:0
      }
    },
    computed: {
      evenOrOdd(){
        return this.count %2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      increment(){
        this.count++
      },
      decrement(){
        this.count--
      },
      incrementifOdd(){
        if (this.count % 2 ===1) {
          this.count++
        }
      },
      incrementAsync(){
        setTimeout(function (){
          this.count++
        }.bind(this), 1000);
      }
    },
  
  }
</script>
  
<style scoped>
  
</style>