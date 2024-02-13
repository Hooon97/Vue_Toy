<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hoons'Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/home">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list">  
            <a class="nav-link" href="#">List</a>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<p> <router-link to="/list"> 리스트 페이지로 이동 </router-link> </p>
<p> <router-link to="/home"> 홈페이지로 이동 </router-link> </p>


<router-view :boardContents="blogContents"></router-view>

<!-- <ListComp v-for="(blog, blog_index) in blogContents" :key="blog_index"
  :boardTitle="blog.title" :boardContent="blog.content" :boardDate="blog.date" :boardNumber="blog.number" /> -->

</template>

<script>
// import ListComp from './components/List.vue'
import dataContent from './assets/data.js'

export default {
  name: 'App',
  components: {
    // ListComp,
  },
  data(){
    return {
      blogContents : dataContent
    }
  },
}
</script>

<style>


</style>
