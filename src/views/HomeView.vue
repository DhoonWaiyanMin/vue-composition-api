<template>
  <div class="home">
    <PostList :posts="posts"></PostList>
  </div>

</template>

<script>
import PostList from '../components/PostList'
import { computed, reactive, ref ,onMounted , onUnmounted } from 'vue';

export default {
  components: { PostList },
  setup(){

    let posts = ref([
    
      {title : "post title one", body : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus reiciendis provident aliquam libero necessitatibus minus ipsam fuga debitis quod. Impedit voluptates alias id, veritatis atque dolores facilis magni! Repellat, facilis?",id : 1},
      {title : "post title two", body : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus reiciendis provident aliquam libero necessitatibus minus ipsam fuga debitis quod. Impedit voluptates alias id, veritatis atque dolores facilis magni! Repellat, facilis?m ",id : 2}
    ])

    let showPost = ref(true)

    return {
      posts,
      showPost
    }
  }
}
</script>
