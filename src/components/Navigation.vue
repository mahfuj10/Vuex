<template>

    <nav>
        <h4>Blogs</h4>

        <span>
            <router-link to="/">Home</router-link>
            <router-link to="/">Contact</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
        </span>

    </nav>

</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
nav {
    padding: 10px;
    background-color: rgb(3, 32, 32);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav a {
    text-decoration: none;
    font-weight: bold;
    padding-left: 40px;
    color: white;
}

nav h4 {
    color: white;
    letter-spacing: 2px;
}
</style>