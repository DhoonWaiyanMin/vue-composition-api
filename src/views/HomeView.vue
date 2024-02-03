<template>
  <div class="home">
    <div v-if="posts.length > 0">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
  </div>

</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from "../composables/getPosts"
import { computed, reactive, ref ,onMounted , onUnmounted } from 'vue';

export default {
  components: {
    Spinner, PostList },
  setup(){

    let {posts , error , load} = getPosts()
    load();
    console.log(posts ,error)
    let showPost = ref(true)

    return {
      posts,
      showPost,
      error
    }
  }
}
</script>
