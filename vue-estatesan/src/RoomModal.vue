<template>
  <div class = "black-bg" v-if="flag"> 
    <div class = "white-bg"> 
      <DiscountBanner/>
      <h4>{{rooms[index].title}}</h4>
      <p>{{rooms[index].content}} </p>
      <p>{{rooms[index].price}}  원 </p>
      <!-- props에서 받아온 데이터는 항상 read-only 이므로, 수정이 불가능하다. -->
      <button> 닫기 </button>
    </div>
  </div>
</template>

<script>
import DiscountBanner from './DiscountBanner.vue'

export default {
    name:'RoomModal',
    //부모로부터 받은 데이터, 이름 : 데이터 형식
    //props에서 받아온 데이터는 항상 read-only 이므로, 수정이 불가능하다.
    props : {
        rooms: Object,
        flag : Boolean,
        index : Number,
    },
    data(){
        return {

        }
    },
    components : {
        DiscountBanner,
    }
}
</script>

<style>

    .black-bg {
    width: 100%; height: 100%;
    background : rgba(0,0,0,0.5);
    position:fixed; padding:20px;
    }

    .white-bg {
    width : 100%; background : white;
    border-radius : 8px;
    padding : 20px;
    }

</style>