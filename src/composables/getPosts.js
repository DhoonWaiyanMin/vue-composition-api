import { computed, reactive, ref ,onMounted , onUnmounted } from 'vue';

let getPosts = ()=>{
    let posts = ref([])
    let error = ref("");

    let load = async()=>{
      try{
        // crearte new promise for loading 
        await new Promise((resolve,reject)=>{
          // resolve();
          setTimeout(resolve,2000);
        })
        let response = await fetch("http://localhost:3000/posts")
        if(response.status === 404){
          throw new Error("URL not found");
        }
        let datas = await response.json();
        posts.value = datas;
      }
      catch(err){
        error.value = err.message
      }
      
    }
    return {posts , error , load}
}

export default getPosts