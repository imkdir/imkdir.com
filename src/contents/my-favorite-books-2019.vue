<template>
    <div class="container">
        <h2>My Favorite Books 2019</h2>
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
                    "permanent_record",
                    "american_accent_training",
                    "triple_your_reading_speed",
                    "dependency_injection",
                    "fluent_python",
                    "you_dont_know_js",
                    "simplifying_javascript",
                    "pragmatic_thinking_and_learning",
                    "unix_power_tools",
                    "unix_programming_env",
                    "small_sharp_software_tools",
                    "how_to_change_your_mind",
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
