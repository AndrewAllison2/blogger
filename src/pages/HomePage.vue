<template>
  <div class="container-fluid">

    <div class="row mt-3">
      <button class="btn btn-info mb-4" data-bs-toggle="collapse" data-bs-target="#collapseBlogForm" >Create Blog</button>


<div class="collapse" id="collapseBlogForm">
  <div class="card card-body">
    <form @submit.prevent="createBlog()">
      <div>
        <label for="title">TITLE</label>
        <input v-model="editable.title" type="text" id="title" required>
      </div>
      <div>
        <label for="tags">tags</label>
        <input v-model="editable.tags" type="text" id="tags">
      </div>
      <div>
        <label for="imgUrl">imgUrl</label>
        <input v-model="editable.imgUrl" type="url" id="imgUrl" >
      </div>
      <div>
        <label for="body">Body</label>
        <textarea v-model="editable.body" name="body" id="body" cols="30" rows="10" required></textarea>
      </div>
      <div>
        <input type="submit">
      </div>

    </form>
  </div>
</div>

      <div class="d-flex col-10 m-auto p-3 mb-4 border border-dark rounded elevation-4 blogCard selectable" @click="setActiveBlog(blog)" v-for="blog in blogs" :key="blog.id">
          <!-- SECTION CARD INFORMATION -->
          <div class="d-flex">
            <BlogPost :blogProp="blog" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import {blogsService} from '../services/BlogsService.js'
import { computed, onMounted, ref } from "vue";
import { AppState } from "../AppState.js";
import BlogPost from "../components/BlogPost.vue";


export default {
  setup() {
        const editable = ref({})

        async function getBlogs() {
            try {
                await blogsService.getBlogs();
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getBlogs();
        });
    return {
          editable,
          blogs: computed(() => AppState.blogs),

          setActiveBlog(blog) {
            blogsService.setActiveBlog(blog)
          },

          async createBlog() {
            try {
              const blogData = editable.value
              await blogsService.createBlog(blogData)
              $('#collapseBlogForm').collapse('hide')
            } catch (error) {
              Pop.error(error.message)
            }
          }
        };
    },
    components: { BlogPost }
}
</script>

<style scoped lang="scss">

.blogCard {
  height: 35vh;
}
label{
  display: block;
}

</style>
