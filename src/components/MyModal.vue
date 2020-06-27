<template>
  <div>

    <div class="background" >
     <div class="modal">
         <button class="cross"
                @click="CloseModal">X
         </button>
         <div v-if="typeModel == 'deleteModal'">
          <h1>Are you sure?</h1>
          <div class="">
            <button class="main-btn"
                    @click="DelItem"
                    >Yes
            </button>
          </div>
        </div>
        <div v-if="typeModel == 'titleModal'">
           <button class="cross"
                @click="CloseModal">X
           </button>
          <input type="text" placeholder="Name" v-model="titleName">
          <div class="">
            <button class="main-btn"
                    @click="CreateTitle"
                    >Create
            </button>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['typeModel'],
  data() {
    return {
      titleName: ''
    }
  },
  methods:{
    CloseModal () {
      this.$emit('cancel')
    },
    DelItem () {
      this.$emit('delItem')
    },
    CreateTitle () {
      this.$emit('createTitle', this.titleName)
    }

  }
}
</script>

<style scoped>
h1{
  margin-bottom: 15px;
}
.modal{
  width: 30%;
  position: absolute;
  top: 20%;
  left: 35%;
  background: lightblue;
  z-index: 1001;
  border-radius: 10px;
  cursor: auto;
  padding: 30px;
}
.background{
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color:rgba(151, 142, 142,.3);
}
.background:hover{
  cursor: pointer;
}

</style>
