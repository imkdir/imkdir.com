<template>
    <nav class="menu">
        <div class="menu-items">
            <router-link class="menu-subitem" to="/">Home</router-link>
            <router-link class="menu-subitem" to="/blog">Blog</router-link>
            <router-link class="menu-subitem" to="/projects">Projects</router-link>
            <router-link class="menu-subitem" to="/miscellaneous">Miscellaneous</router-link>
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

@media only screen and (max-width: 768px) {
    .menu-items {
        flex-direction: row;
    }
}

.menu-subitem {
  margin: 10px;
  text-align: left;
  font-weight: 400;
  color: #2c3e50;
  text-decoration: none;
}

.menu-subitem:hover {
  font-weight: 500;
}

</style>