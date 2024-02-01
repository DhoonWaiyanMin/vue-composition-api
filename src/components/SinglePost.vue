<template>
  <div class="singlePost">
    <h3>{{ post.title }}</h3>
    <p>{{ cutPostBody }}</p>
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
}
</style>