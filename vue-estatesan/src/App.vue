<template>

  <!-- UI 만드는 방법
    1. HTML, CSS 등 기본적인 형식을 만든다.
    2. UI의 현재 상태를 데이터로 저장하며 관리한다.
    3. 데이터에 따라 UI가 어떻게 보일지를 결정한다.
   -->
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

  <div v-for="(product, rooms) in products" :key="rooms">
    <!-- 이처럼 가변경로를 입력해주는 방식을 webpack이라고 하며, 고전적인 방식이다.-->
    <img :src="require(`./assets/room${rooms}.jpg`)" class="room-img">
    <h4 @click="offModal()">{{product}}</h4>
    <p>100 만원 </p>
    <button @click="increaseReport(rooms)">허위매물 신고 버튼 </button> <span>신고 수 : {{reports[rooms]}}</span>
  </div>
</template>

<script>
//문법만 외우면 코딩 인생 망함 ㅋㅋㅋ
//그 문법을 언제, 왜 쓰는지 알아야함ㅋㅋㅋ
export default {
  name: 'App',

  //데이터 보관함, object 자료 형식으로 저장함
  data(){
    return {
      //데이터 바인딩
      price1 : 60,
      price2 : 90,
      //속성 데이터 바인딩
      스타일: "color : red",
      products : ['역삼동원룸', '천호동원룸', '강남구원룸'],
      reports : [0,0,0],
      menus : ['Home', 'Shop', 'About'],
      // 모달 UI 상태값
      modalFlag : false,
    }
  },
  methods:{
    increaseReport(idx){
      this.reports[idx]++;
    },
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
