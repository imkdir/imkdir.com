<template>
    <div class="container">
        <h2>My Favorite Books 2018</h2>
        <div class="book-list" v-for="(book, index) in books" :key="index">
            <div class="book-cover">
                <img :src="getCoverUrl(book)" alt="" width="140" height="200">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            books: [
                "dreaming_the_beatles",
                "count_magnus",
                "flowers_for_algernon",
                "lord_of_the_flies",
                "seveneves",
                "small_fry",
                "soulstealer",
                "the_innovators",
                "the_war_of_art",
                "thinking_fast_and_slow",
                "win_sand_and_stars",
                "gods_graves_scholars"
            ]
        }
    },
    methods: {
        getCoverUrl(book) {
            return require(`../assets/image/${book}.jpg`)
        }
    }
}
</script>

<style scoped>
    .book-cover {
        float: left;
        display: inline;
        padding: 10px;
    }

    .book-cover img {
        object-fit: cover;
        border: 1px solid #ccc;
    }

</style>
