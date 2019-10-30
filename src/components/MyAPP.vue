<template>
    <div class="container">
        <img class="app-icon" width="170" :src="getAppIcon(item.id)" alt="">
        <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a class="badge" :href="linkToAppStore(item.id)"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyAPP",
        props: ['item'],
        methods: {
            getAppIcon(id) {
                return require(`../assets/image/${id}.png`)
            },
            linkToAppStore(id) {
                return `https://apps.apple.com/us/app/eatles/id${id}?mt=8`
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 240px;
        margin-bottom: 20px;
    }
    .app-icon {
        border-radius: 30px;
        box-shadow: 10px 10px 5px lightgray;
    }
    .badge {
        display:inline-block;
        overflow:hidden;
        background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-05-16&kind=iossoftware&bubble=ios_apps) no-repeat;
        width:135px;
        height:40px;
    }
</style>