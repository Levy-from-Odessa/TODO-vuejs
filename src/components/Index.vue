<template>


  <div class="todo">
    <!-- list of todos -->
    <div v-for="(todo, index) in todos" :key="index" class="todo-list">
      <my-to-do :todoName="todo.name"
                :list="todo.list"
                :index="index"
                @click-delete="toggleModal('deleteModal', index)">
      </my-to-do>
    </div>






    <!-- BTN -->
    <div class="todo-list">
      <button class="main-btn add-todo"
              @click="toggleModal('titleModal')">
          add ToDo
      </button>
    </div>
    {{TEST}}
    <!-- modal -->
    <my-modal v-if="typeModel=='deleteModal'"
              @delItem="delItem"
              @cancel="toggleModal(null)"
              :typeModel="typeModel">
    </my-modal>
    <my-modal v-if="typeModel=='titleModal'"
              @createTitle="addItem($event)"
              @cancel="toggleModal(null)"
              :typeModel="typeModel">
    </my-modal>

</div>
</template>

<script>
import MyToDo from "./MyToDo"
import MyModal from "./MyModal"
import { mapState, mapGetters , mapActions} from "vuex"
export default {
  data() {
    return {
      modal: false,
      selected: null,
      coutToDo:null,
      TEST: null,
      typeModel:null
    }
  },
  methods: {
     goTo (route) {
      this.$router.push(route)
    },
    toggleModal(typeModel, index=null) {
      this.typeModel = typeModel
      this.selected = index
    },
    delItem() {
      this.$store.commit("delToDo", this.selected)
      this.typeModel = null
    },
    addItem(newTodoTitle) {
      if(newTodoTitle){
        this.$store.commit("addToDo", {name:newTodoTitle, list: [] })
        this.goTo( {
                    name: 'MyEditToDo',
                    params: {
                      ToDoId: this.TodosCount-1
                    }
                  })
      } else{
        this.typeModel = null
      }
    }
  },

  components: {
    MyToDo,
    MyModal
  },
  computed: {
    ...mapGetters({todos: "TODOS",TodosCount: "TodosCount"})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.todo-list {
  width: 25%;
  margin: 30px;
  max-width: 250px;
}
.add-todo {
  background: rgb(16, 143, 33);
  margin: 80px auto;
}
.add-todo:hover {
  background: rgb(33, 226, 81);
}
</style>
