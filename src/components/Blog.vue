<template>

    <article class="blog">

        <router-link :to="'/blog/' + blog._id">
            <img :src="blog.blogImg" :alt="blog.name">
            <h4>{{ blog.name }}</h4>
        </router-link>

    </article>


</template>

<script>


export default {
    name: "Blog",
    props: {
        blog: Object
    },
    methods: {

    },

}
</script>

<style scoped>
.blog {
    width: 550px;
    background-color: white;
    margin-bottom: 50px;

}

.blog img {
    width: 100%;
}

h4 {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 10px;
    opacity: 0.5;
}

.blog a {
    text-decoration: none;
    color: black;
}
</style>