<template>
  <main>
    <!--hero section-->
    <header class="header">
      <div class="text-center">
        <h2
          class="text-center text-white sm:text-2xl md:text-3xl font-bold pt-48"
        >
          Enjoy Your Dream Vacation
        </h2>
        <p
          class="text-white md:text-xl sm:text-sm text-center font-normal w-2/5 m-auto"
        >
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
    </header>
        <SearchComp />

 
<div style="width:97%; margin:auto">
      <WarningSec ></WarningSec>

</div>
    <!-- enjoy your vacation-->
    <div class="con-vacation text-dark m-auto mt-10">
      <div class="ml-5">
        <h1 class="font-bold text-2xl">Enjoy your dream vacation</h1>
        <p class="w-1/2">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <!-- cards container-->
      <div class="flex flex-wrap justify-between mt-10">
        <!-- card 1 -->
        <div class="max-w-md">
          <div class="flex rounded-lg flex-col">
            <img
              :src="recEight"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Australia</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg flex-col">
            <img
              :src="recNine"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Japan</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 3 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg dark:bg-gray-800 flex-col">
            <img
              :src="recTen"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">NewsLanda</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 4 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg dark:bg-gray-800 flex-col">
            <img
              :src="recElven"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Greece</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
      </div>
    </div>

    <!--inspireation container-->
    <div class="con-vacation text-dark m-auto mt-10">
      <div class="ml-5">
        <h1 class="font-bold text-2xl">Get inspiration for your next trip</h1>
      </div>
      <!-- cards container-->
      <div class="flex flex-wrap justify-between mt-10">
        <!-- card 1 -->
        <div class="max-w-md">
          <div class="flex rounded-lg h-full dark:bg-gray-800 flex-col pic-1">
            <div class="text-white mt-40 ml-5">
              <p>Sydeny’s 10 most fashionable 5 star hotels</p>
              <p class="text-sm mt-2 block">
                Browse the fastest growing tourism sector in the heart of
                Australia tourism capital ....
              </p>
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 flex-col pic-2">
            <div class="text-white mt-40 ml-5">
              <p>Top cities for Vegan Travellers</p>
              <p class="text-sm mt-2 block">
                Top sites where you do not have to worry about being a vegan.
                Our tourist guide is here...
              </p>
            </div>
          </div>
        </div>
        <!-- card 3 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg h-full dark:bg-gray-800 flex-col pic-3">
            <div class="text-white mt-40 ml-5">
              <p>World’s top destinations during and post covid timeline</p>
              <p class="text-sm mt-2 block">
                Pandemic is still intact and will be here for a longer time.
                Here’s where your next destination...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--popular hotels-->
    <div class="con-vacation text-dark m-auto mt-10">
      <div class="ml-5">
        <h1 class="font-bold text-2xl">Popular Hotels</h1>
        <p class="w-1/2">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <!-- cards container-->
      <div class="flex flex-wrap justify-between mt-10">
        <!-- card 1 -->
        <div class="max-w-md">
          <div class="flex rounded-lg flex-col">
            <img
              :src="imgEight"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">
              Lakeside Motel Warefront
            </p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg flex-col">
            <img
              :src="imgNine"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Recce Graham resort</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 3 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg dark:bg-gray-800 flex-col">
            <img
              :src="imgTen"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Fireside Dinners</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
        <!-- card 4 -->
        <div class="max-w-sm">
          <div class="flex rounded-lg dark:bg-gray-800 flex-col">
            <img
              :src="imgElven"
              class="w-50"
            />
            <p class="font-bold text-xl mt-5 text-dark">Oculous Inn Stay</p>
            <p class="text-sm text-dark mt-2">2246 properties</p>
          </div>
        </div>
      </div>
    </div>
    <!--download app-->
    <div class="download-con m-auto mt-9 h-70 flex justify-between">
      <div class="m-14">
        <p class="text-white font-bold text-xl w-4/6">
          Download the mobile application for bonus coupons and travel codes
        </p>
        <button
          class="bg-color-primary rounded font-sm text-white py-1.5 px-4 mt-6"
        >
          Download mobile app
        </button>
      </div>
      <div class="img">
        <!-- <img class="lg:w-full sm: sm:h-full lg:h-42" src="src/assets/images/home images/Isolated_right_hand_with_smartphone 2.png"> -->
      </div>
    </div>
    <!--footer-->
        <Footer></Footer>

  </main>
</template>
<style scoped>
.header {
  background: url("src/assets/images/home images/Rectangle 2.png") no-repeat;
  background-size: cover;
  height: 500px;
  width: 97%;
  margin: auto;
  border-radius: 10px;
}

.con-vacation {
  width: 97%;
}
.pic-1,
.pic-2,
.pic-3 {
  height: 280px;
  width: 395px;
  background-size: cover;
  margin-bottom: 10px;
}
.pic-1 {
  background: url("src/assets/images/home images/Rectangle 8 (1).png") no-repeat;
}
.pic-2 {
  background: url("src/assets/images/home images/Rectangle 16.png") no-repeat;
}
.pic-3 {
  background: url("src/assets/images/home images/Rectangle 17.png") no-repeat;
}
.download-con {
  background: url("src/assets/images/home images/Rectangle 18.png") no-repeat;
  background-size: cover;
  width: 97%;
}
.img {
  background: url("src/assets/images/home images/Isolated_right_hand_with_smartphone 2.png")
    no-repeat;
  background-size: cover;
  width: 100%;
}

</style>
<script setup>
import WarningSec from "../components/WarningSec.vue";
import SearchComp from "../components/searchComp.vue";
import Footer from "../components/Footer.vue"


import recEight from '../assets/images/home images/Rectangle 8.png'
import recNine from '../assets/images/home images/Rectangle 9.png'
import recTen from '../assets/images/home images/Rectangle 10.png'
import recElven from '../assets/images/home images/Rectangle 11.png'

import imgEight from '../assets/images/home images/Rectangle 8 (2).png'
import imgNine from '../assets/images/home images/Rectangle 9 (1).png'
import imgTen from '../assets/images/home images/Rectangle 10 (1).png'
import imgElven from '../assets/images/home images/Rectangle 11 (1).png'








</script>
