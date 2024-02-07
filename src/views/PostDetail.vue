<template>
  <h1>Detail</h1>
  <div v-if="post" class="singlePost">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      {{ tag }}
    </div>
    <button class="delete-btn" @click="handleDelete">Delete Post</button>

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
import { db } from "../firebase/config"
import { useRoute , useRouter } from 'vue-router';
export default {
  components: { Spinner },
    props : ['id'],
    setup(props){
        // this.$route.params.id 
        let route = useRoute();
        let router = useRouter()

        // console.log(route.params.id)
        let {post , error , load} = getPost(route.params.id);
        load()

        let handleDelete = async ()=>{
          let id = props.id;
          await db.collection("posts").doc(id).delete()
          router.push("/")
        }


        return {
            post,
            error,
            handleDelete
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
    position: relative;
}
.pill{
  display: inline-block;
  background-color: #777;
  text-align: center;
  color: white;
  min-width: 50px;
  height: 20px;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 40px;
}
.delete-btn{
  background: crimson;
  color: white;
  border: none;
  padding: 10px;

  position: absolute;
  right: 10px;
  top: 10px;

  border-radius: 10px;
  cursor: pointer;
}
.delete-btn:hover{
  box-shadow: 0 0 20px #bbb;
  background-color: darkred;
}
</style>