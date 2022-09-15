<template>
    <div class="navbar">
        <h1>
            <a href="./">
                Consumindo API do Laravel com Vue.js
            </a>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    props: {
        msg: String,
    }
}
</script>

<style>
.navbar {
    background-color: #282c34;
    color: #abb2bf;
}

.navbar a {
    color: #abb2bf;
    text-decoration: none;
}
</style>