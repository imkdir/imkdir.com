<template>
    <div class="blog-entries">
        <div class="blog-entry" v-for="blog in blogEntries" :key="blog.id">
            <BlogEntry :blog="blog" />
        </div>
    </div>
</template>

<script>
import BlogEntries from '../../statics/data/blogs.json';
import BlogEntry from './BlogEntry';

export default {
    name: 'Blog',
    computed: {
        blogEntries () {
            return BlogEntries;
        }
    },
    components: { BlogEntry }
}
</script>