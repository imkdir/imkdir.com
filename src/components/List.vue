<template>
   <div>
       <div class="list-content" v-for="(item, index) in list" :key="index">
          <p v-if="index !== 'default'">{{ item }}</p>
       </div>
   </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getListFromRoute()
    },
    methods: {
        getListFromRoute() {
            import(`../../statics/data/${this.$route.name}.json`)
                .then(res => {
                    this.list = res;
                })
        }
    },
}
</script>

<style scoped>
.list-content {
    text-align: left;
    margin: 0 0 0 2em;
}

.list-content p {
    font-weight: 500;
    font-size: large;
    font-family: monospace;
}
</style>