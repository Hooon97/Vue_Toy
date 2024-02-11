<template>
  <div>
    <RoomModal v-if="modalFlag"
       :rooms="products" :index="curModIdx" :modalFlag="modalFlag"
        @closeModal = "modalFlag = false"/>
  </div>

  <div class = "menu">
    <a v-for="(iter_name, unique1) in menus" :key="unique1"> {{iter_name}} </a>
  </div>

  <DiscountBanner/>


  <RoomCard v-for="(product, prd_idx) in products" :key="prd_idx"
    @openModal = "modalFlag = true; curModIdx = $event"
    :room="product" />
  
  
</template>

<script>
//문법만 외우면 코딩 인생 망함 ㅋㅋㅋ
//그 문법을 언제, 왜 쓰는지 알아야함ㅋㅋㅋ

//외부 파일의 데이터, 함수 등을 가져와 사용할 때는 import를 통해 사용할 수 있다.
//단, import 하고자 하는 파일도 export가 정의되어 있어야 한다.
import oneroomData from './assets/data.js'
import DiscountBanner from './DiscountBanner.vue'
import RoomModal from './RoomModal.vue'
import RoomCard from './RoomCard.vue'

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
      curModIdx : 0,
    }
  },
  methods:{
    offModal(product_idx){
      this.curModIdx = product_idx;
      this.modalFlag = true;
    },
  },

  /* 그래서 이거 왜 씀?
  1. 코드 축약이 가능하기 때문이다. -> 단위 코드로 해석이 가능하여 복잡성 감소
  2. 코드 재사용에 용이하다.
  3. 코드 관리가 용이함. (수정, 유지 보수)
  컴포넌트는 무조건 많이 만든다고 좋은 게 아니다. 어떤 상황에선 데이터 기입에 문제가 발생할 수 있다.
  초보자 특) 무조건 컴포넌트화 시키려고 함
  */
  components: {
    //왼쪽은 자유 작명(내가 사용할 이름), 오른쪽은 import 해올 때 사용한 이름
    // ES6 문법에서는, 좌우측의 이름이 같으면 하나로 축약 가능 ex) Discount
    DiscountBanner, // DiscountBanner : DiscountBanner
    RoomModal,
    RoomCard,
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
