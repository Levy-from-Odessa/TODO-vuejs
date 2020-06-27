import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MyToDo from '@/components/MyToDo'
import MyEditToDo from '@/components/MyEditToDo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ToDo',
      name: 'MyToDo',
      component: MyToDo
    },
    {
      path: '/EditToDo/:ToDoId',
      name: 'MyEditToDo',
      component: MyEditToDo
    }
  ]
})
