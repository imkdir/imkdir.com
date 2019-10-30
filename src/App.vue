<template>
  <div id="app">
    <header>
      <h1>imkdir, then cd.</h1>
    </header>
    <aside><Menu/></aside>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'app',
  components: { Menu }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
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

@media only screen and (max-width: 768px) {
  .main {
    width: 100%;
  }
  aside {
    margin-bottom: 20px;
    border: none;
  }
}
</style>
