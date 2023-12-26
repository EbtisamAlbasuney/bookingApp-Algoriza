<template>
    <main class="w-full bg-color-secondary p-10">
<div class="main-div m-auto">
             <div
          class="bg-white  h-60 rounded-md mt-5 flex w-3/4 m-auto"
        >
          <div class="hotel-con m-5 w-2/6">
            <img
              :src="imgRec"
              alt="hotel img"
            />
          </div>
          <div class="rate w-2/6">
            <p class="mt-6 font-bold text-lg">Lakeside Motel Warefront</p>
            <ul class="flex">
              <li>
                <img
                  :src="imgStar"
                  class="w-5"
                />
              </li>
              <li>
                <img
                 :src="imgStar"
                  class="w-5"
                />
              </li>
              <li>
                <img
                 :src="imgStar"
                  class="w-5"
                />
              </li>
              <li>
                <img
                 :src="imgStar"
                  class="w-5"
                />
              </li>
              <li>
                <img
                  :src="imgStarTwo"
                  class="w-2.5"
                />
              </li>
              <li class="text-sm px-2"><span>4.5 (1200 Reviews)</span></li>
            </ul>
            <p class="text-danger mt-9 text-sm">Non refundable</p>
            <p class="text-sm mt-2">
              Check in: Sunday, March 18, 2022
            </p >
            <p class="text-sm mt-2">Check out: Tuesday, March 20, 2022</p>
            <p class="text-sm mt-2">
             2 night stay
            </p>
           
          </div>
          <div class="price w-2/6">
           
            <p class="font-bold text-xl ml-36 mt-24"><span class="text-danger text-lg font-normal px-4 line-through	">$150</span>$130</p>
            <p class=" text-lg ml-20 mt-2">Includes taxes and fees</p>
             <button
              class="bg-color-primary rounded font-sm text-white py-1 px-4 mt-4 w-44 btn ml-20"
            >
              View trip details
            </button>
          </div>
        </div>
</div>
    </main>
</template>
<style scoped>
.main-div {
  width: 93%;
  margin: auto;
}
</style>
<script setup>
import imgRec from '../assets/images/searchResults/Rectangle 25.png'
import imgStar from '../assets/images/searchresults/star-s-fill 4.svg'
import imgStarTwo from '../assets/images/searchresults/star-s-fill 5.svg'

</script>
