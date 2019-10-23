<template>
    <div>
        <p class="date">{{ item.date }}</p>
        <p class="event">{{ item.event }}</p>
    </div>
</template>

<script>
export default {
    name: 'TimelineBlock',
    props: ['item']
}
</script>

<style scoped>
.date {
    font-family: monospace;
    font-weight: bold;
}
</style>