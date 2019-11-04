<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :todos="todos":selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
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
  mounted(){
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

  methods: {
    //增加
    addTodo(todo) {
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
