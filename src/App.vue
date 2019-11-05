<template>
  <div>
    <p>clicked {{count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrment if odd</button>
    <button @click="incrementAsync">incrment async</button>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    mounted() {
    
    },
    methods: {
      increment(){
        this.$store.commit('INCREMENT')
      }
    },
    decrement(){
      this.$store.commit('DECREMENT')
    },
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    },
  }
</script>
  
<style scoped>
  
</style>