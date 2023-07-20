<template>
  <div class="container-fluid">
    <div class="row">


      <div class="col-10 m-auto">
        <div class="d-flex justify-content-center mt-3 mb-3">
          <img class="img-fluid cover-img" :src="activeBlog.imgUrl" :alt="activeBlog.title">
        </div>
        <div class="d-flex justify-content-around mb-3">
          <img class="avatar" :src="activeBlog.creator.picture" alt="">
          <div>
            <h5>{{activeBlog.title}}</h5>
            <p>{{activeBlog.creator.name}}</p>
            <p>{{activeBlog.updatedAt.toLocaleDateString()}}</p>
          </div>
          <button class="btn btn-info">EDIT</button>
        </div>
        <p>{{activeBlog.body}}</p>
      </div>


    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    return {
      activeBlog: computed(() => AppState.activeBlog)
    }
  }
}
</script>


<style lang="scss" scoped>
.avatar{
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
}
.cover-img{
  object-fit: cover;
  max-height: 50vh;
  width: 50vw;
  object-position: bottom;
}
</style>