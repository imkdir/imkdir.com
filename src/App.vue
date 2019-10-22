<template>
  <div id="app">
    <header>
      <h1>Welcome to my website, my name is Tung CHENG.</h1>
    </header>
    <aside><Menu/></aside>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer>
      <p>Hosted on GitHub Page, written with WebStorm & Vue.js</p>
    </footer>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'app',
  components: {
      Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: 40px;
}

footer p {
  font-size: 12px;
  font-weight: 300;
  color: gray;
}

aside {
  float: right;
  border-left: solid gray 1px;
  border-top: solid gray 1px;
  border-bottom: solid gray 1px;
}

.main {
  width: 50%;
}
</style>
