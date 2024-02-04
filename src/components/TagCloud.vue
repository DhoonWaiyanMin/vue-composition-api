<template>
  <div>
    <h1>Tag Clouds</h1>
    <div v-for="tag in uniqueTags" :key="tag" class="pill-box">
      <router-link :to="{name : 'tag' , params : {tag : tag }}"  class="pill">
            {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props : ["posts"],
  setup(props){
    let tags = ref([]);
    props.posts.forEach(post => {
      // console.log(post.tags)
      post.tags.forEach(tag=>{
        // console.log(tag);
        tags.value.push(tag);
      })
    });

    let uniqueTags = tags.value.filter((tag,index,array)=>{
      return array.indexOf(tag) === index
    })


    return {
      tags,
      uniqueTags
    }
  }
}
</script>

<style>
.pill-box{
  display: inline-block;
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

</style>