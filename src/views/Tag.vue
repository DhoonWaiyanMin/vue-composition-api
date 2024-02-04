<template>
  <div v-if="error">
    <Spinner></Spinner>
  </div>
  <div v-else-if="posts.length > 0" class="layout">
    <div>
      <PostList :posts="filteredPost"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>

  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '@/components/PostList.vue'
import SinglePost from '../components/SinglePost'
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts'
import { computed } from 'vue'
export default {
    components: {
    TagCloud,
    SinglePost, Spinner,
    PostList
},
    props : ['tag'],
    setup(props){
        let {posts , error , load} = getPosts()
        load();

        let filteredPost = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })

        return {
            posts,
            error,
            filteredPost
        }
    }
}
</script>

<style>

</style>