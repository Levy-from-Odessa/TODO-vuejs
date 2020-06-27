<template>
     <div class="todo-component editing">
      <h1>{{editingToDo.name}}</h1>
      <h1> TODO</h1>

      <!-- list of point (text, done) -->
      <ul>
        <li v-for="(point, i) in editingToDo.list" :key="i">
          <my-point-to-do :point="point"
                          @click-delete="toggleModal('deleteModal', i)"
                          @changed-point="exportItem($event, i)"
                         >
          </my-point-to-do>
        </li>

        <!-- add a new point btn -->
        <li class="add_item">
          <button class="main-btn" @click="addPoint">
            <img class="add_item-svg" src="../assets/plus.svg" alt="">
          </button>
        </li>
      </ul>
        <!-- btn for savind in a store editing data -->
      <button class="main-btn edit-todo"
              @click="saveChanges(true)">
              Edit
      </button>

        <!-- return old data  -->
      <button class="main-btn"
              @click="saveChanges(false)">
              Cancel
      </button>

      <my-modal v-if="typeModel"
                @delItem="delItem"
                @cancel="toggleModal(null)"
                :typeModel="typeModel">
      </my-modal>

  </div>

</template>

<script>
import MyModal from "./MyModal"
import MyPointToDo from './MyPointToDo'
import { mapState } from "vuex"
export default {
  data () {
    return {
      ToDoId: null,
      modal: false,
      selected: null,
      originalToDo: [],
      typeModel:null
    }
  },
  methods: {
    toggleModal(typeModel, index=null) {
      this.typeModel = typeModel
      this.selected = index
    },
    delItem(){
      this.editingToDo.list.splice(this.selected , 1)
      this.typeModel = null
    },
    addPoint () {
      this.$set(this.editingToDo.list, this.editingToDo.list.length, {item: "new task", done:false} )
    },
    exportItem (newValue, i) {
      this.editingToDo.list.splice(i, 1, newValue)
    },
    saveChanges (save) {
      if(save) {
        this.$store.commit("saveToDos", {
          todo: this.editingToDo,
          id: this.ToDoId
          })
      }
      else{
        this.$store.commit("saveToDos", {
          todo: this.originalToDo,
          id: this.ToDoId
          })
      }
      this.goTo ({name: 'Index'})
    },
    goTo (route) {
      this.$router.push(route)
    }
  },
  beforeMount(){
    this.ToDoId = this.$route.params.ToDoId
    this.originalToDo= JSON.parse(JSON.stringify(this.editingToDo));
    // save an original for make possible a cancel btn where it will send to store
  },
  computed: {
    editingToDo (){
      return this.$store.getters.TodoById(this.ToDoId)
    }
  },
  components: {
    MyPointToDo,
    MyModal
  }

}
</script>

<style scoped>
.editing{
  width: 60%;
  margin: 0 auto;
}
.add_item{
  text-align: center;
  border: none;
}
.add_item-svg{
   width: 40px;
  height: 40px;
}


</style>
