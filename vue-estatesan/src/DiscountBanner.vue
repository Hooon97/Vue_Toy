<template>
  
  
  <div class="discount">
      <h4> 지금 사면 {{amountDiscount}}% 할인해줌 </h4>
  </div>

</template>

<script>
export default {
    name:'DiscountBanner',
    props:{
      amountDiscount : Number,
    },
    data(){
      return {
        
      }
    },
}
</script>

<style>
    .discount {
  background: #eee;
  padding : 10px;
  margin : 10px;
  border-radius : 5px;
}
</style>