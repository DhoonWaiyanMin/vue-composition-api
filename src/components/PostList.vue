<template>
  <h1>Posts </h1>
  <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
  </div>

</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props : ['posts'],

    setup(props){
        console.log(props.posts[0])

        

    }
}
</script>

<style>

</style>