<template>
  <div class="todo-component">
    <button class="cross" @click="$emit('click-delete')">X</button>
    <h1>{{todoName}}</h1>
    <h1> TODO</h1>
    <ul>
      <!-- list of points in todo (only 3) -->
      <li v-for="(point, i) in list.slice(0,3)" :key="i">
        <input type="checkbox"   v-model="point.done" checked disabled>{{point.item}}
      </li>
    </ul>

    <!-- link to editing page -->
    <button class="main-btn edit-todo"
            @click="goTo({
                  name: 'MyEditToDo',
                  params: {
                    ToDoId: index
                  }
                })"
            >
    Edit</button>
  </div>

</template>

<script>
import MyModal from './MyModal'
export default {
  props: ['todoName', 'list', 'index'],
  data () {
    return {
      modal: false,
    }
  },
  methods: {
     goTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
