<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>
<script>
export default {
  name:'Header',
  props:{
    // addTodo:{
    //   type:Function,
    //   required:true,
    // }
  },
  data(){
    return{
      title:''
    }
  },
  methods:{
    add(){
      //去除输入的数据
      const title = this.title.trim()
      //合法性检测
      if (title === '') return
      //创建todo对象
      const todo = {
        id:Date.now(),
        complete:false,
        title,
      }
      //调用addTodo()来添加todo
      // this.addTodo(todo)
      this.$emit('addTodo',todo)
      console.log('addTodo Header');
      //清除输入
      this.title = ''
    }
  }
}
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>