<template>
  <div>
    <div>
      <div v-if="editFlag">
        <input type="checkbox"   v-model="point.done" checked>
        <span :class="ClassDonePoint" @click="changeInfo()">{{newPoint}}</span>
      </div>
      <div v-else>
        <input type="text"  v-model="newPoint" @focusout="changeInfo()"/>
      </div>
      <button class="cross" v-if="editFlag" @click="$emit('click-delete')">X</button>
      <button class="edit">
        <img class="edit-svg" src="../assets/edit.svg" @click="changeInfo()" />
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: ["point", "index"],
  data() {
    return {
      editFlag: true,
      newPoint: this.point.item
    }
  },


  methods: {
    changeInfo() {
      this.editFlag = !this.editFlag
      this.$emit('changed-point',  {item: this.newPoint, done: this.done})
    },
  },
  computed: {
    ClassDonePoint (){
      return (this.point.done ? "done-point" : '')
    }
  }


};
</script>

<style scoped>
.done-point{
  text-decoration-line: line-through;
}
.edit {
  position: absolute;
  top: 0;
  right: 35px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.edit-svg {
  width: 20px;
  height: 20px;
}
</style>
