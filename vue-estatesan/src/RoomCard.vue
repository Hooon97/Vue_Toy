<template>

  <div> 
    <img :src="room.image" class = "room-img">
    <h4 @click = "send()"> {{room.title}} </h4>
    <p> {{room.price}} 만원</p>
  </div>
</template>

<script>


export default {
    name:"RoomCard",
    props:{
        room: Object,
    },
    data(){
        return {

        }
    },
    methods:{
        send(){
            this.$emit('openModal', this.room.id)
        }
    },
    components: {
        
    },
}
</script>

<style>
    .room-img {
    width : 50%;
    padding-top : 40px;
    }
</style>