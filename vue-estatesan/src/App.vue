<template>

    <transition name="fade">
    <RoomModal v-if="modalFlag" 
       :rooms="products" :index="curModIdx" :modalFlag="modalFlag"
        @closeModal = "modalFlag = false"/>
    </transition>

  <div class = "menu">
    <a v-for="(iter_name, unique1) in menus" :key="unique1"> {{iter_name}} </a>
  </div>

  <button @click="priceSortDesc()"> 가격 높은 순 정렬 </button>
  <button @click="priceSortAsc()"> 가격 낮은 순 정렬 </button>
  <button @click="priceSortTitle()"> 제목 순 정렬 </button>
  <button @click="sortBack()"> 되돌리기 </button>

  <DiscountBanner :amountDiscount="amountDiscount" />


  <RoomCard v-for="(product, prd_idx) in products" :key="prd_idx"
    @openModal = "modalFlag = true; curModIdx = $event"
    :room="product" />
  
</template>

<script>
//문법만 외우면 코딩 인생 망함 ㅋㅋㅋ
//그 문법을 언제, 왜 쓰는지 알아야함ㅋㅋㅋ

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
      origin_products : [...oneroomData],
      스타일: "color : red",
      products : oneroomData,
      menus : ['Home', 'Shop', 'About'],
      // 모달 UI 상태값
      modalFlag : false,
      curModIdx : 0,
      // DiscountBanner 상태 값 저장
      showDiscount : true,
      // DiscountBanner 할인율
      amountDiscount : 30,
    }
  },
  methods:{
    offModal(product_idx){
      this.curModIdx = product_idx;
      this.modalFlag = true;
    },
    priceSortAsc(){
      this.products.sort(function(a,b){
        return a.price-b.price;
      });
    },
    priceSortDesc(){
      this.products.sort(function(a,b){
        return b.price-a.price;
      });
    },
    priceSortTitle(){
      this.products.sort(function(a,b){
        return a.title > b.title ? 1 : -1;
      });
    },
    sortBack(){
      // deep copy
      this.products = [...this.origin_products];
    },
  },

  /*create - mount - 컴포넌트 생성 - update 단계 - unmount 단계로 구성되는데,
    각 단계 이 전, 이 후 별로 hook을 걸 수 있다.

    보통 서버에서 데이터를 받아올 때 (AJAX) Life Cycle Hook을 자주 사용한다.
  */
  //life cycle hooks 설정. mount 되고 난 후의 설정
  mounted (){
    // JS function에는 function()과 => (arrow Function) 두 종류가 있다.
    // Arrow Function의 경우 this.를 통해 데이터를 받아올 수 있다.
    // setTimeout(() => {
    //   this.showDiscount = false;
    // }, 2000)

      var timer = setInterval(() => {
        this.amountDiscount--;
      }, 1000)

      setTimeout(()=>{
        clearInterval(timer);
      }, 10000)
  },
  //life cycle hooks 설정. mount 되기 이전의 설정. 
  beforeMount() {

  },
  components: {

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

.start {
  opacity: 0;
  Transition: all 1s;
}
.end {
  opacity : 1;
}

/* 시작 시 스타일 */
.fade-enter-from{
  opacity : 0;
}

/* 애니메이션 스타일 */
.fade-enter-active{
  Transition: all 1s;
}

/* 종료 시 스타일 */
.fade-enter-to{
  opacity : 1;
}

/* 시작 시 스타일 */
.fade-leave-from{
  opacity : 1;
}

/* 애니메이션 스타일 */
.fade-leave-active{
  Transition: all 1s;
}

/* 종료 시 스타일 */
.fade-leave-to{
  opacity : 0;
}
</style>
