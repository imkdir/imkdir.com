<template>
    <div class="app-list">
        <div v-for="item in items" :key="item.id">
            <MyAPP :item="item" />
        </div>
    </div>
</template>

<script>
    import MyAPP from "@/components/MyAPP";
    export default {
        name: "Showcase",
        components: {MyAPP},
        data() {
            return {
                items: [
                    {
                        "id": "1457657907",
                        "title": "Eatles",
                        "description": "A Calories Tracking App.",
                    },
                    {
                        "id": "1485252687",
                        "title": "Woword",
                        "description": "A Language Learning App.",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .app-list {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    @media only screen and (max-width: 768px) {
        .app-list {
            flex-direction: column;
            align-items: center;
        }
    }
</style>