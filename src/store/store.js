import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  plugins: [createPersistedState()],
  mutations: {
    delToDo(state, TODOS) {
      state.todos.splice(TODOS, 1)
    },
    DROPToDos(state) {
      state.todos = []
    },
    addToDo(state, NEWTODO) {
      state.todos.push(NEWTODO)
    },
    saveToDos(state, TODOS) {
      state.todos[TODOS.id] = TODOS.todo
    }

  },
  actions: {
    delToDo({commit}, TODOS) {
      commit('delToDos', TODOS)
    },
    addToDo({commit}, NEWTODO) {
      commit('delToDos', NEWTODO)
    },
    saveToDos({commit}, TODOS) {
      commit('saveToDos', TODOS)
    },
    DROPToDos({commit}) {
      commit('DROPToDos')
    }
  },
  getters: {
    TODOS: state => {
      return state.todos
    },
    TodoById: state => id => {
      return state.todos[id]
    },
    TodosCount: state =>  {
      return state.todos.length
    }
  }

})
