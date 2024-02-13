<template>
{{$route.params.id}} 번째 게시글
  <div>
    <h3> {{boardContents[$route.params.id].title}} </h3>
    <p> {{boardContents[$route.params.id].content}} </p>
    <p> {{boardContents[$route.params.id].date}} </p>
  </div>
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

</style>