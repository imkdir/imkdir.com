<template>
    <router-link class="entry" :to="blog.id">
        <h2>{{ blog.title }} <span> · {{ blog.date }}</span></h2>
        <p>{{ blog.description }}</p>
    </router-link>
</template>

<script>
export default {
    props: ['blog'],
}
</script>

<style scoped>
.entry {
    margin: 3em 0 2em 0;
    text-decoration: none;
}

h2 {
  font-size: medium;
  color: #1144aa;
  text-align: left;
}

h2 span {
    color: black;
}

p {
  text-align: left;
  color: black;
  font-weight: 500;
  text-decoration: none;
}
</style>