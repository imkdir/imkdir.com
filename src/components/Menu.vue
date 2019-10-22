<template>
    <nav class="menu">
        <div class="menu-items">
            <router-link class="menu-subitem" to="/">Home</router-link>
            <router-link class="menu-subitem" to="/blog">Blog</router-link>
            <router-link class="menu-subitem" to="/">Projects</router-link>
            <router-link class="menu-subitem" to="/">Miscellaneous</router-link>
        </div>
    </nav>
</template>

<style scoped>

.menu {
  padding: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
}

.menu-subitem {
  margin: 10px;
  text-align: left;
  font-weight: 400;
}

</style>