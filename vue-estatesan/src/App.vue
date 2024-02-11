<template>

  <div class = "black-bg" v-if="modalFlag"> 
    <div class = "white-bg"> 
      <h4>상세페이지</h4>
      <p>상세 페이지 내용 </p>
      <button @click="offModal()"> 닫기 </button>
    </div>
  </div>


  <div class = "menu">
    <a v-for="(iter_name, unique1) in menus" :key="unique1"> {{iter_name}} </a>
  </div>


  <div v-for="(product, product_idx) in products" :key="product_idx"> 
    <img :src="product.image" class = "room-img">
    <h4 @click="offModal()"> {{product.title}} </h4>
    <p> {{product.price}} 만원</p>
  </div>
  
  
</template>

<script>
//문법만 외우면 코딩 인생 망함 ㅋㅋㅋ
//그 문법을 언제, 왜 쓰는지 알아야함ㅋㅋㅋ

//외부 파일의 데이터, 함수 등을 가져와 사용할 때는 import를 통해 사용할 수 있다.
//단, import 하고자 하는 파일도 export가 정의되어 있어야 한다.
import oneroomData from './assets/data.js'

export default {
  name: 'App',

  //데이터 보관함, object 자료 형식으로 저장함
  data(){
    return {
      //속성 데이터 바인딩
      스타일: "color : red",
      products : oneroomData,
      menus : ['Home', 'Shop', 'About'],
      // 모달 UI 상태값
      modalFlag : false,
    }
  },
  methods:{
    offModal(){
      this.modalFlag = !this.modalFlag
    },
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
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

.room-img {
  width : 50%;
  padding-top : 40px;

}

.menu {
  background: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding : 10px;
  
}
</style>
