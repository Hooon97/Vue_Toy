<template>

  <div class ="detail">
    {{$route.params.id}} 번째 게시글
    <h3> {{boardContents[$route.params.id].title}} </h3>
    <p> {{boardContents[$route.params.id].content}} </p>
    <p> {{boardContents[$route.params.id].date}} </p>
  </div>

  <router-view> </router-view>
</template>

<script>
export default {
    name:"DetailVue",
    props:{
      boardContents:Array,
    }
}
</script>

<style>
.detail{
  align-content: center;
}

.h3{
  align-items: center;
}
</style>