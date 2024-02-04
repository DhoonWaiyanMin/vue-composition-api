<template>
  <div class="singlePost">
    <h3>{{ post.title }}</h3>
    <p v-if="post">{{ cutPostBody }}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
        <router-link :to="{name : 'tag' , params : {tag : tag }}">
          {{ tag }}
        </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props : ['post'],
    setup(props){
        let cutPostBody = computed(()=>{
            return props.post.body.substring(0,100)+"...";
        })
        return {
            cutPostBody
        }
    }

}
</script>

<style>
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
  text-align: center;
  color: white;
  min-width: 50px;
  height: 20px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 10px 20px;
  border-radius: 40px;
}
.pill a{
  color: #fff;
}
</style>