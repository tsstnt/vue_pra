<template>
  <div>
    <p>clicked {{count}} times, count is {{evenOrOdd}}</p>
    <!-- <p>clicked {{$store.state.count}} times, count is {{$store.getters.evenOrOdd}}</p> -->

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrment if odd</button>
    <button @click="incrementAsync">incrment async</button>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    mounted() {
      console.log(this.$store);
    },
    computed: {
      count(){
        return this.$store.state.count
      },
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      increment(){
        this.$store.commit('INCREMENT')
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
    },
  }
</script>
  
<style scoped>
  
</style>