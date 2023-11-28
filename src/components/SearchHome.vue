<template>
    <div class="con-search w-4/5  bg-white rounded m-auto -mt-8 flex justify-space-between shadow-md"> 
     <SearchHomeLocation></SearchHomeLocation>
     <CheckInDateHome></CheckInDateHome>
     <SearchGuests></SearchGuests>
    </div>
</template>
<style scoped>
.con-search{
    height: 64px;
    background: blue;
}

</style>
<script setup>
import SearchHomeLocation from "../components/SearchHomeLocation.vue";
import CheckInDateHome from "../components/CheckInDateHome.vue";
import SearchGuests from "../components/SearchGuests.vue"


</script>