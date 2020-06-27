<template>
  <div id="app">
    <header>
      <h1 class="logo">SAVAS TODOS</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style >
body{
  background:#eee;
  margin: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
header{
  background: rgb(5, 130, 161);
  border-bottom:1px solid transparent ;
  border-bottom-right-radius:5px ;
  border-bottom-left-radius:5px ;
  margin-bottom: 40px;
}
ul{
  list-style: none;
  padding: 0;
  text-align: left;
}
h1{
  font-size: 40px;
  margin: 0;
  width: 100%;
  word-wrap: break-word;
}
li, input[type=text]{
  margin: 5px;
  font-size: 24px;
  border-bottom:1px solid #333 ;
  font-family: 'Dancing script', Helvetica, Arial, sans-serif;
  position: relative;
}
input{
  margin: 0 10px 0 0  !important;
  border: none;
  border-bottom:1px solid blue !important;
  padding: 0 !important;

}
input[type="checkbox" i]{
  width: 17px !important;
  height: 17px !important;

}
:focus {
  outline: none;
}
.main-btn{
  font-size: 30px;
  width: 50%;
  height: 30%;
  border-radius: 5px;
  transition: .2s all linear;
  text-transform: capitalize;
  border: none;
  background: transparent;

}
.logo{
  text-align: left;
  padding: 10px;
}
.main-btn:hover{
  cursor: pointer;
}
.cross{
  font-weight: 700;
  color:red;
  position: absolute;
  top:5px;
  right:5px;
  background: transparent;
  border: none;
}
.cross:hover{
  cursor:pointer
}
.todo-component{
  border: 1px solid #333;
  border-top: 10px solid rgb(5, 130, 161);
  border-radius: 5px;
  padding: 10px;
  position: relative;
  background:#fff ;

}

.edit-todo{
  background:rgb(5, 130, 161);
}
.edit-todo:hover{
  background:  rgb(39, 198, 238);
}
.done-point{
  text-decoration-line: line-through;
}
</style>
