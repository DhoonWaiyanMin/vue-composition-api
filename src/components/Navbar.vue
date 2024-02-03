<template>
  <header>
    <h1>Bloggy Vue</h1>
    <nav>
        <router-link :to="{name:'home'}">Post List</router-link>
        <router-link :to="{name:'create'}">Add New Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  margin-right: 20px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: #f4f4f4;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px #777;
}
</style>