<template>

    <article class="blogCover">

        <img :src="blog.blogImg" alt="">

    </article>

    <h2>{{ blog.name }}</h2>

</template>

<script>
export default {
    name: "BlogDetails",
    computed: {
        blog() {
            console.log(this.$store.state.blogDetails)
            return this.$store.state.blogDetails;
        }
    },
    created() {
        this.$store.commit('blogDetails', this.$route.params.id);
    }
}
</script>

<style scoped>
.blogCover {
    display: flex;
    justify-content: center;
}

h2 {
    text-align: center;
    font-size: 40px;
    opacity: 0.4;
}
</style>