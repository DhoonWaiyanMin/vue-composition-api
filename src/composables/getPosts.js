import { computed, reactive, ref ,onMounted , onUnmounted } from 'vue';
import { db } from "../firebase/config"

let getPosts = ()=>{
    let posts = ref([])
    let error = ref("");

    let load = async()=>{
      try{
        // crearte new promise for loading 
        // await new Promise((resolve,reject)=>{
          // resolve();
        //   setTimeout(resolve,2000);
        // })
        // let response = await fetch("http://localhost:3000/posts")
        // if(response.status === 404){
        //   throw new Error("URL not found");
        // }
        // let datas = await response.json();
        // posts.value = datas;


        // Data from Firebase 
        let response = await db.collection("posts").orderBy("created_at","desc").get();
        // console.log(response.docs);
        posts.value = response.docs.map((doc)=>{
          // console.log(doc.data());
          return {
            id : doc.id,
            ...doc.data()
          }
        });
        
      }
      catch(err){
        error.value = err.message
      }
      
    }
    return {posts , error , load}
}

export default getPosts