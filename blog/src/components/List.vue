<template>
  <div calss = "blog_main"
        v-for="(board, board_index) in boardContents" :key="board_index">
    <router-link v-bind:to="`/detail/${board.number}`"> <h5> {{board.title}} </h5> </router-link>
    <p>{{board.content}}</p>
    <p> {{board.date}} </p>
  </div>

  
  
</template>



<script>
export default {
    name: 'ListComp',
    props:{
        boardContents: Array,
    },
}
</script>

<style>

.blog_main {
    text-align: center;
}

p {
    text-align: center;
}

h5 {
    text-align: center;
}
</style>