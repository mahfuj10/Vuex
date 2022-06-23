<template>

    <h4 v-if="blogs.length === 0">Loading...</h4>

    <section class="container">

        <Blog v-for="blog of blogs" :blog="blog" />

    </section>

</template>

<script>

import Blog from '@/components/Blog.vue';

export default {
    name: "Blogs",
    components: {
        Blog,
    },
    computed: {
        blogs() {
            return this.$store.state.blogs;
        }
    },
    created() {
        this.$store.commit('getAllBlogs')
    }
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    column-gap: 50px;
    justify-content: center;
}

h4 {
    padding-left: 30px;
}
</style>