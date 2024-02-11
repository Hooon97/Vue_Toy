<template>
  <div class = "black-bg"> 
    <div class = "white-bg"> 
      <DiscountBanner/>
      <img :src="rooms[index].image" class ="room-img"/>
      <h4>{{rooms[index].title}}</h4>
      <p>{{rooms[index].content}} </p>
      <input v-model="month">
      <!-- <input @input="month = $event.target.value"> -->
      <p> {{month}}개월 선택함 : {{ rooms[index].price * month}}  원 </p>
      <!-- props에서 받아온 데이터는 항상 read-only 이므로, 수정이 불가능하다. 
        대신 emit 문법을 사용하면 부모 컴포넌트에게 이벤트 실행 요청을 보낼 수 있다.
      -->
      <button @click="$emit('closeModal')"> 닫기 </button>
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
        rooms: Array,
        index : Number,
    },
    data(){
        return {
            month : 1,
        }
    },
    components : {
        DiscountBanner,
    }
}
</script>

<style>
    .room-img {
    width : 50%;
    padding-top : 40px;
    }

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