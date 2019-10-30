<template>
    <div>
        <h2>{{ item }} Privacy Policy</h2>
        <p>In short, we do not collect any of your data.
            Your logs and preferences are with your device,
            and only you have access to them. We don’t.</p>
    </div>
</template>

<script>
    export default {
        name: "privacy-policy",
        computed: {
            item: function () {
                let str = this.$route.params['name'];
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }
    }
</script>

<style scoped>
p {
    text-align: justify;
}
</style>