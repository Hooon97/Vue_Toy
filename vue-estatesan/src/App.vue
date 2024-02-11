<template>


  <div class = "menu">
    <!-- vue의 for 반복문은 두 개의 이름을 정할 수 있다. 왼쪽은 순회하는 자료를 지칭하고, 오른쪽은 인덱스를 의미한다.
    key는 pc가 반복문을 구별하기 위한 고유값이다. -->
    <a v-for="(iter_name, unique1) in menus" :key="unique1"> {{iter_name}} </a>
  </div>

  <div>
    <!-- 속성 데이터 바인딩은 콧수염이 아니라 속성 앞에 콜론(:)을 붙인다 -->
    <h4 class="red" :style="스타일">{{products[0]}}</h4>
    <p>{{price1}} 만원 </p>
  </div>

  <div v-for="(product, rooms) in products" :key="rooms">
    <h4>{{product}}</h4>
    <p>100 만원 </p>
    <!-- javascript ; onClick: 사용,
        Vue 문법 ; v-on: ~~~, 클릭 시 함수 호출을 하려면 v-on:click 
          축약해서 @click 도 가능.
        길어질 경우 methods로 빼서 사용한다.-->
    <button @click="increaseReport(rooms)">허위매물 신고 버튼 </button> <span>신고 수 : {{reports[rooms]}}</span>
  </div>
</template>

<script>
//문법만 외우면 코딩 인생 망함 ㅋㅋㅋ
//그 문법을 언제, 왜 쓰는지 알아야함ㅋㅋㅋ
export default {
  name: 'App',
  /*
  //1. HTML에 자료값을 하드코딩해두면 변경이 어려움 ex) 쇼핑몰 상태값은 가변적인 데이터가 대다수이기 때문에, 데이터를 따로 관리하는게 좋음
  //2. Vue가 제공하는 실시간 자동 렌더링 기능을 이용하기 위해서임.
    실시간 자동 렌더링 기능이란, 데이터 보관함에서 값이 변경되면 데이터 변경 사항이 자동으로 반영이 되는 기능이다.
    이 기능을 사용하면 웹앱 같은 페이지가 탄생하는 것이다.
  */

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
    }
  },
  methods:{
    increaseReport(idx){
      //함수 내에서 data 저장소의 값을 사용하려면, this로 지정해줘야한다.
      this.reports[idx]++;
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
