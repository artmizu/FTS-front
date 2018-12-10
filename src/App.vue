<template>
  <div id="app">
    <div class="link-list">
      <div class="link-list__el">
        <router-link to="/user">User list</router-link>        
      </div>
      <div class="link-list__el">
        <router-link to="/game">Game list</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}

a {
  color:blue;
  text-decoration: none;
  border-bottom:1px solid blue;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
}

.link-list {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  &__el {
    margin:0 7px;
    font-size: 15px;
    line-height: 19px;
    display: inline-block;
    .router-link-active {
      border-bottom: 0;
    }
  }
}

.content {
  max-width: 350px;
  margin:15px auto 25px;
}
</style>
