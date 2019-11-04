<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo" /> -->
      <!-- <Header @addTodo="addTodo" />的父组件中给子组件对象绑定自定义事件监听 -->
      <Header ref="header" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <!-- <Footer :todos="todos":selectAll="selectAll" :clearAllComplete="clearAllComplete"/> -->
      <Footer>
        <span slot="center">
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span> 
        <input type="checkbox" v-model="isCheckAll" slot="left"/>
        <button class="btn btn-danger" v-show="completeSize>0" @click="clearAllComplete" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      todos: [
        // { id: 1, title: "sleep", complete: false },
        // { id: 2, title: "eat", complete: false },
        // { id: 3, title: "watch", complete: true },
        // { id: 4, title: "sing", complete: true },
        // { id: 5, title: "talking", complete: false } 
      ]
    };
  },
    computed: {
    completeSize() {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0);
    },
    isCheckAll: {
      get(){
        return this.todos.length === this.completeSize && this.completeSize>0
      },
      set(value){
        this.selectAll(value)
      }
    }
  },
  mounted(){
    // 组件对象的原型(父)对象就是一个vm对象
    // console.log('App mounted()', this, new Vue())
    this.$refs.header.$on('addTodo',this.addTodo)
    //this.$on('addTodo',this,addTodo)//不可以

    //通过事件总线对象绑定时间监听(deleteTodo)
    this.$eventBus.$on('deleteTodo',this.deleteTodo)
    //读取local中保存的todos数据
    setTimeout(() => {
      this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
    }, 200);
  },
  watch: {
    todos:{
      deep:true,
      handler:(value)=>{
        localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
  },
  //在组件对象死亡之前,解除事件监听
  // beforeDestroy() {
  //   this.$eventBus.$off('deleteTodo')
  // },

  methods: {
    //增加
    addTodo(todo) {
      console.log('addTodoApp');
      this.todos.unshift(todo);
    },
    //删除
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => id !== todo.id);
    },

  
    //清除已经完成的
    clearAllComplete(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
     // 全选/全不选
      selectAll(check){
      this.todos.forEach(todo => todo.complete = check)
    },
       //更新todo的comlete的值
    updateTodo(todo,isCheck) {
      todo.complete = isCheck
    },
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>
<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
