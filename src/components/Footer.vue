<template>
  <div>
    <h1 class="font-bold text-center mt-10 text-2xl">
      Explore the world with My Dream place
    </h1>
    <p class="text-center mt-4 text-lg text-color-primary">
      Discover new places and experiences
    </p>
    <div class="flex flex-wrap justify-between mt-10 footer m-auto">
      <div class="1">
        <router-link to="/" class="text-lg font-bold md:text-xl">
          <!-- <i class="fa-solid fa-plane-departure text-color-primary"></i> -->
          <div class="flex">
            <img :src="imgPlane" >
          <span class="mx-1 text-gray-800">My Dream Place</span>
          </div>
        </router-link>
        <p class="text-lg w-9/12 text-gray-600 mt-3 ml-6">
          Your next goto companion for travel
        </p>
      </div>
      <div class="2">
        <h2 class="text-lg font-bold md:text-xl text-gray-800">Company</h2>
        <ul class="mt-5  text-gray-600">
          <li><a href="#">About</a></li>
          <li class="mt-1"><a href="#">Jobs</a></li>
          <li class="mt-1"><a href="#">Newsroom</a></li>
          <li class="mt-1"><a href="#">Advertising</a></li>
          <li class="mt-1"><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="3">
         <h2 class="text-lg font-bold md:text-xl text-gray-800">Expolre</h2>
        <ul class="mt-5  text-gray-600">
          <li><a href="#">Austeralia</a></li>
          <li class="mt-1"><a href="#">Newslanda</a></li>
          <li class="mt-1"><a href="#">United State America (USA)</a></li>
          <li class="mt-1"><a href="#">Greece</a></li>
          <li class="mt-1"><a href="#">Maldives</a></li>
          <li class="mt-1"><a href="#">Singapore</a></li>
          <li class="mt-1 text-color-primary"><a href="#">see more</a></li>
        </ul>
      </div>
      <div class="4">
         <h2 class="text-lg font-bold md:text-xl text-gray-800">Terms And Polices</h2>
        <ul class="mt-5  text-gray-600">
          <li><a href="#">Privacy Policy</a></li>
          <li class="mt-1"><a href="#">Terms Of use Accesbility</a></li>
          <li class="mt-1"><a href="#">Reward System Policy</a></li>
        </ul>
      </div>
      <div class="5">
         <h2 class="text-lg font-bold  md:text-xl text-gray-800">Help</h2>
        <ul class="mt-5  text-gray-600">
          <li><a href="#">Support</a></li>
          <li class="mt-1"><a href="#">Cancel Your Booking</a></li>
          <li class="mt-1"><a href="#">Use Coupon</a></li>
          <li class="mt-1"><a href="#">Refund Polices</a></li>
          <li class="mt-1"><a href="#">international travel documents</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="copyright   mt-10 w-full">
    <div class="flex col-reverse mr-40" >
        <i class="fa-regular fa-copyright px-2 mt-2"></i>
    <p class=" mt-1">my Dream Place 2023</p>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 90%;
}
.copyright{
    background: #EBEBEB;
    height: 40px;
    color:#4F4F4F;
      display: flex;
  flex-direction: row-reverse
}
</style>
<script setup>

import imgPlane from '../assets/images/home images/bxs-plane-alt 1.svg'

</script>
