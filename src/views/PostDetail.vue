<template>
  <h1>Detail</h1>
  <div v-if="post" class="singlePost">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      {{ tag }}
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { useRoute } from 'vue-router';
export default {
  components: { Spinner },
    props : ['id'],
    setup(props){
        // this.$route.params.id 
        let route = useRoute();
        // console.log(route.params.id)
        let {post , error , load} = getPost(route.params.id);
        load()

        return {
            post,
            error
        }
    }
}
</script>

<style scoped>
.singlePost{
    background: #f4f4f4;
    padding: 50px;
    margin: 10px 0;
    border-radius: 20px;
    box-shadow: 0 0 10px #777;
    text-decoration: none;
}
.pill{
  display: inline-block;
  background-color: #777;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
}
</style>