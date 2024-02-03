<template>
  <div class="singlePost">
    <h3>{{ post.title }}</h3>
    <p>{{ cutPostBody }}</p>
    <div class="pill" v-for="tag in post.tags" :key="tag">
        {{ tag }}
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
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
}
</style>