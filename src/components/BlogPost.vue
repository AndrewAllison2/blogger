<template>

  <div class="blog-body">
    <div class="d-flex align-items-center">
      <img class="img-fluid avatar" :src="blogProp.creator.picture" alt="">
      <p class="mb-0 ms-2">{{ blogProp.creator.name }}</p>
    </div>
    <p class="fw-bold">{{ blogProp.title }}</p>
    <p class="blogProp-body">{{ blogProp.body.substring(0, 250)}} . . .</p>
    <p>{{ blogProp.createdAt.toLocaleDateString() }}</p>
    <div>
      <router-link class="text-black" :to="{name: 'ActiveBlog'}">
        <button @click="setActiveBlog(blogProp)" class="btn btn-success me-2">View Blog Post</button>
      </router-link>
      <button @click="deleteBlog()" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
  
  <!-- SECTION CARD IMG -->
  <div class="img-div d-flex justify-content-end ps-2">
    <img class="img-fluid blog-img" :src="blogProp.imgUrl" alt="">
  </div>
    
  

</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { blogsService } from "../services/BlogsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    blogProp: { type: Blog, required: true}
  },
  setup(props){
    return {
      blog: computed(() => AppState.activeBlog),
            
      async deleteBlog() {
        try {
          const confirmed = await Pop.confirm('are you sure you want to delete this blog?')
          if (!confirmed) {
            return
          }
          const blogToDelete = props.blogProp
          await blogsService.deleteBlog(blogToDelete)
        } catch (error) {
          Pop.error(error.message)
        }
      },

      setActiveBlog(blogProp) {
        
        logger.log('Here is my blog Id', )
        logger.log('setting active blog')
            blogsService.setActiveBlog(blogProp)
          },

          
    }
  }
}
</script>


<style lang="scss" scoped>
.avatar{
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
}

.blog-body{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;

}
.blog-img{
  object-fit: cover;
  height: 100%;
  // width: 100%;
}
.img-div{
  height: 25vh;
  width: 25vw;
}
.blog-body{
  width: 55vw;
}
</style>