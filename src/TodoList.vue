<template>
  <div>
    <!-- Logo -->
    <div class="header">
      <div class="header__inner">
        <h1>Dima Rogkov - Lesson 1</h1>
        <a :href="git" target="_black">GitHub</a>
      </div>
    </div>
    <div class="header__margin"></div>

    <!-- Counter -->
    <div class="block counter">
      <div class="counter__block">
        <h2>Counter</h2>
        <p>{{ counter }}</p>
        <button type="submite" @click="counterMisunFive(5)">Minus 5</button>
        <button type="submite" @click="counterMinus()">Minus</button>
        <button type="submite" @click="counter++">Plus</button>
        <button type="submite" @click="counterPlusFive(5)">Plus 5</button>
      </div>
    </div>

    <!-- Model -->
    <div class="block model">
      <div class="model__inputs">
        <h3>Write Info</h3>
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="LastName" v-model="lastname">
        <input type="text" placeholder="Age" v-model="age">
        <input type="text" placeholder="Hobby" v-model="hobby">
        <textarea type="text" placeholder="Some Comment" v-model="comment"></textarea>
      </div>
      <div class="model__cart">
        <h3>Your Personal Cart</h3>
        <div class="model__block">
          <span>Name:</span> <span>{{name}}</span>
        </div>
        <div class="model__block">
          <span>LastName:</span> <span>{{lastname}}</span>
        </div>
        <div class="model__block">
          <span>Age:</span> <span>{{age}}</span>
        </div>
        <div class="model__block">
          <span>Hobby:</span> <span>{{hobby}}</span>
        </div>
        <div class="model__block">
          <span>Comment:</span> <span>{{comment}}</span>
        </div>
      </div>
    </div>

    <!-- List -->
    <div class="block list">
      <div class="list__input">
        <h2>TodoList</h2>
        <div class="list__add">
          <input type="text" placeholder="Add New Task" v-model="list">
          <button type="submite" @click="addList(list)">Add</button>
        </div>
      </div>
      <div class="list__items">
        <div class="list__item" v-for="(task, index) in tasks" :key="index">
            <div v-if="add">
              <div class="list__header">Task for Today</div>
              <div class="list__body">{{task}}</div>
              <button @click="add = !add">Delete</button>
            </div>
            <div v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',

  data() {
    return {
      counter: 0,
      git: "https://github.com/dimarogkov/Okten/tree/master/Vue%20JS%20Core/vue_lesson1",
      name: '',
      lastname: '',
      age: '',
      hobby: '',
      comment: '',
      list: '',
      tasks: [],
      add: true
    }
  },

  methods: {
    counterMinus() {
      this.counter--
      if (this.counter < 0) {
        this.counter = 0
      }
    },
    counterPlusFive(num) {
      this.counter += num
    },
    counterMisunFive(num) {
      this.counter -= num
       if (this.counter < 0) {
        this.counter = 0
      }
    },
    addList() {
      console.log(this.list)
      this.tasks.push(this.list) 
    }
  }
}
</script>

<style>
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* Scrollbar */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  html:not(.touch-screen)::-webkit-scrollbar,html:not(.touch-screen) *::-webkit-scrollbar{width:6px;height:6px;}
  html:not(.touch-screen)::-webkit-scrollbar-track,html:not(.touch-screen) *::-webkit-scrollbar-track{background:#e1e1e1;}
  html:not(.touch-screen)::-webkit-scrollbar-thumb,html:not(.touch-screen) *::-webkit-scrollbar-thumb{background:#333333;}
  
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* GLOBAL SETTINGS */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  *{padding: 0;margin: 0;border: 0;}
  *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  body {font-family: 'Barlow', sans-serif;}
  html,body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 14px;-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;width: 100%;height: auto;}

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* HEADER */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .header {
    position: fixed;
    display: block;
    width: 100%;
    box-shadow: 0 0 10px #ecf0f1;
    z-index: 2;
  }
  .header__inner {
    width: 100%;
    padding: 12px 30px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__margin {
    height: 60px;
  }
  .header__inner h1 {
    margin: 0;
    color: #333333;
    font-size: 15px;
    text-transform: uppercase;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .header__inner a {
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px 20px;
    color: #ffffff;
    letter-spacing: 1px;
    background-color: #333333;
    border: 1px solid #333333;
    border-radius: 3px;
    transition: all 0.3s;
  }
  .header__inner a:hover {
    color: #333333;
    background-color: transparent;
  }
  
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* Counter */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .block {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .counter {
    min-height: calc(100vh - 60px);
  }
  .counter__block {
    position: relative;
    width: 100%;
    text-align: center;
  }
  .counter__block h2 {
    font-size: 40px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #333333;
  }
  .counter__block p {
    font-size: 40px;
    margin-bottom: 20px;
    color: #333333;
  }
  .counter__block button {
    padding: 12px 30px;
    border: 1px solid #333333;
    background-color: #333333;
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 5px;
  }

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* Model */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .model {
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .model__inputs,.model__cart {
    flex: 0 0 30%;
    margin-top: -100px;
  }
  .model__inputs h3 {margin-bottom: 20px;}
  .model__inputs input,.model__inputs textarea {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 8px 10px;
    border-bottom: 1px solid #333333;
    color: #333333;
    font-size: 16px;
  }
  .model__inputs input::placeholder{
    letter-spacing: 1px;
  }
  .model__inputs textarea {
    height: 80px;
  }
  .model__cart {
    background-color: #333333;
    border-radius: 10px;
    padding: 40px 50px 70px 50px;
    color: #ffffff;
  }
  .model__cart h3 {
    margin-bottom: 40px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .model__block {
    padding: 5px 0;
    position: relative;
    margin-bottom: 20px;
  }
  .model__block span:first-child {
    opacity: 0.6;
    font-size: 13px;
    letter-spacing: 0.5px;
  }

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* List */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .list {
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    min-height: auto;
    min-height: 600px;
  }
  .list__input {
    width: 100%;
    text-align: center;
  }
  .list__input h2 {
    font-size: 40px;
    letter-spacing: 1px;
    color: #333333;
    margin-bottom: 40px;
    text-transform: uppercase;
    text-align: center;
  }
  .list__add {
    position: relative;
    display: inline-block;
    border: 1px solid #333333;
  }
  .list__input input {
    width: 400px;
    padding: 12px 10px;
    font-size: 16px;
    color: #333333;
    border-right: none;
    border-radius: 0;
  }
  .list__input button {
    padding: 12px 30px;
    color: #ffffff;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #333333;
    border: 1px solid #333333;
    border-radius: 0;
  }
  .list__items {
    position: relative;
    width: 90%;
    margin: 40px auto auto auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .list__item {
    position: relative;
    display: inline-block;
    width: 300px;
    margin: 0 10px 20px 10px;
  }
  .list__header {
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #c0392b;
    padding: 12px 20px;
    text-align: center;
  }
  .list__body {
    padding: 10px;
    color: #333333;
    font-size: 16px;
    line-height: 28px;
  }
  .list__item button {
    display: block;
    position: relative;
    width: 100%;
    padding: 12px 30px;
    text-align: center;
    color: #333333;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #fbfbfb;
    cursor: pointer;
  }
</style>
