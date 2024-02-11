<template>
  <div class = "black-bg"> 
    <div class = "white-bg"> 
      <DiscountBanner/>
      <img :src="rooms[index].image" class ="room-img"/>
      <h4>{{rooms[index].title}}</h4>
      <p>{{rooms[index].content}} </p>
      <input v-model="month">
      <p> {{month}}개월 선택함 : {{ rooms[index].price * month}}  원 </p>
      <button @click="$emit('closeModal')"> 닫기 </button>
    </div>
  </div>
</template>

<script>
import DiscountBanner from './DiscountBanner.vue'

export default {
    name:'RoomModal',
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
    },
    watch : {
      month(number) {
        if(number >= 13){
          alert("13이상은 안됨")
        }else if(!isNaN(number)){
          this.month = number;
        }
        else{
          alert("숫자만 입력하셈")
          this.month = 1;
        }
      },
    },
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