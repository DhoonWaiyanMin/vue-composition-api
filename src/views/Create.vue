<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required/>

    <label>Body</label>
    <textarea v-model="body" rows="5" required></textarea>

    <label>Tag(hit enter to add tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">
    <div class="pill" v-for="tag in tags" :key="tag">
      {{ tag }}
    </div>
    <button>add post</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db } from "../firebase/config"
export default {
  setup(){
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let router = useRouter(); // this.$router

    let handleKeyDown = (e)=>{
      // alert("enter key is working")
      if(!tags.value.includes(tag.value)){
        tags.value.push(tag.value);
      }
      tag.value = ""
    }



    let handleSubmit = async (e)=>{
      // await fetch("http://localhost:3000/posts",{
      //   method : "POST",
      //   headers : {
      //     "Content-type" : "application/json"
      //   },
      //   body : JSON.stringify(
      //     {
      //       title : title.value,
      //       body : body.value,
      //       tags : tags.value
      //     }
      //   )
      // })
      // // redirect user to home page 
      // // router.push("/")
      // router.push({name: 'home'})
      let post = {
            title : title.value,
            body : body.value,
            tags : tags.value
      }

      await db.collection("posts").add(post)
      // console.log(response)

      router.push("/")
      
    }

    return{
      title,
      body,
      tag,
      tags,
      handleKeyDown,
      handleSubmit
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
form{
  max-width: 500px;
  background-color: #f4f4f4;
  padding: 40px;
  border-radius: 20px;
  margin: 20px auto;
  box-shadow: 0 0 40px #777;
}
label{
  display: block;
  padding: 10px 20px;
  background-color: #f4f4f4;
  color: #aaa;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
input , textarea{
  width: 100%;
  padding: 5px;
  margin: 10px 0 30px 0;
  /* background-color: #999; */
  border: none;
  border-bottom: 1px solid #777;
  outline: none;
}
input:focus, textarea:focus{
  outline: none;
  border-bottom: 2px solid #444;
}
button{
  background-color: steelblue;
  display: block;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 0 0 10px #777;
  margin-top: 50px;
}
button:hover{
  box-shadow: 0 0 20px #777;
}
.pill{
  display: inline-block;
  background-color: #777;
  text-align: center;
  color: white;
  min-width: 50px;
  height: 40px;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 40px;
}
</style>