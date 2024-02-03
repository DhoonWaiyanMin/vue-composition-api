<template>
  <h1>Posts </h1>
    <div v-for="post in posts" :key="post.id">

        <router-link :to="{name : 'postDetail', params :{id : post.id}}">
            <SinglePost :post="post"></SinglePost>
        </router-link>
        
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
a{
  text-decoration: none;
  color: #777;
}
a:hover{
  color: #444;
}
</style>