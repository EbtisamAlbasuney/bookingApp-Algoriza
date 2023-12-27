<template>
  <main class="main-sec">
    <div class="h-[20vh] main-div text-white m-auto"></div>
    <SearchComp />
    <div class="flex justify-between mt-14">
      <div class="left">
        <div class="hotelMain flex flex-row rounded-md">
          <div class="flex flex-col rounded-sm">
            <div
              class="searchByName mb-4 w-full h-50 rounded-md bg-color-secondary p-5"
            >
              <p class="text-left pb-4 font-bold text-lg">
                Search by property name
              </p>
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-para"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  v-model="search"
                  id="default-search"
                  class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="eg. Beach westpalm"
                  required
                />
              </div>
            </div>
            <div class="filterBy text-left">
              <p class="text-left pb-4 font-bold text-lg">Filter by</p>
              <div
                class="budget border-2 border-color-secondary rounded-md pb-4"
              >
                <div
                  class="bg-color-secondary w-full h-14 text-left p-3 font-bold text-lg"
                >
                  <p>Your budget per day</p>
                </div>
                <ul class="ml-3 mt-3 leading-9">
                  <li>
                    <input type="radio" name="x" />
                    <span class="text-left px-2">$ 0 - $ 200</span>
                  </li>
                  <li>
                    <input type="radio" name="x" /><span class="text-left px-2"
                      >$ 200 - $ 500</span
                    >
                  </li>
                  <li>
                    <input type="radio" name="x" /><span class="text-left px-2"
                      >$ 500 - $ 1,000</span
                    >
                  </li>
                  <li>
                    <input type="radio" name="x" />
                    <span class="text-left px-2">$ 1,000 - $ 2,000</span>
                  </li>
                  <li>
                    <input type="radio" name="x" />
                    <span class="text-left px-2">$ 2,000 - $ 5,000</span>
                  </li>
                </ul>
                <div class="setOwnBudget mt-3 ml-3">
                  <div class="flex justify-between w-3/4">
                    <p>Set your own budget</p>

                    <label
                      class="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        class="sr-only peer border-0"
                      />
                      <div
                        class="w-11 h-6 bg-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  </div>

                  <div class="budgets flex justify-between w-3/4 mt-3">
                    <input
                      type="text"
                      class="rounded-md w-5/12 p-2 border-2 border-color-secondary text-xs"
                      placeholder="min budget"
                    />
                    <input
                      type="text"
                      class="rounded-md w-5/12 p-2 border-2 border-color-secondary text-xs"
                      placeholder="max budget"
                    />
                  </div>
                  <p class="text-lg mt-2">Press enter to filter</p>
                </div>
              </div>
            </div>

            <div
              class="rating mt-4 border-2 border-color-secondary rounded-md pb-4"
            >
              <div
                class="bg-color-secondary w-full h-14 text-left p-3 font-bold text-lg"
              >
                <p>Rating</p>
              </div>
              <div class="stars-main">
                <p class="p-3">Show only ratings more than</p>
                <div
                  class="h-10 stars flex flex-row gap-2 justify-around items-center border-2 border-color-secondary rounded-md w-11/12 ml-3"
                >
                  <div
                    class="item border-r-2 border-color-secondary h-10 flex w-10"
                  >
                    <p class="mt-2">1</p>
                    <img
                      :src="imgStar"
                      alt="star"
                      class="w-5"
                    />
                  </div>

                  <div
                    class="item border-r-2 border-color-secondary h-10 w-10 flex"
                  >
                    <p class="mt-2">2</p>
                    <img
                      :src="imgStar"
                      alt="star"
                      class="w-5"
                    />
                  </div>

                  <div
                    class="item border-r-2 border-color-secondary h-10 w-10 flex"
                  >
                    <p class="mt-2">3</p>
                    <img
                      :src="imgStar"
                      alt="star"
                      class="w-5"
                    />
                  </div>

                  <div
                    class="item border-r-2 border-color-secondary h-10 w-10 flex"
                  >
                    <p class="mt-2">4</p>
                    <img
                      :src="imgStar"
                      alt="star"
                      class="w-5"
                    />
                  </div>
                  <div class="item flex h-10 w-10">
                    <p class="mt-2">5</p>
                    <img
                      :src="imgStar"
                      alt="star"
                      class="w-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="flex justify-between">
          <p class="font-bold text-xl">
            {{ cityNameGeneral }} : 2,582 search results found
          </p>
          <div class="dropdown">
            <div>
              <div class="relative">
                <!-- Dropdown toggle button -->
                <button
                  @click="show = !show"
                  class="flex items-center w-50 p-2 text-gray-900 bg-white border-2 border-color-secondary rounded-md"
                >
                  <div>
                    <p class="text-sm text-left">Sort by</p>
                    <p class="text-xs font-bold text-left">Recommended</p>
                  </div>

                  <svg
                    class="w-5 h-5 text-gray-900 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  v-show="show"
                  class="absolute right-0 py-2 mt-2 bg-white border-1 border-b-color-secondary rounded-md shadow-xl w-50"
                >
                  <span class="flex justify-between">
                    <span class="ml-4">bla bla hotel</span>
                  </span>

                  <span class="flex justify-between">
                    <span class="ml-4">bla bla hotel</span>
                  </span>

                  <span class="flex justify-between">
                    <span class="ml-4">bla bla hotel</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- todo --------------------   start of the hotels data -->
        <div
          class="border-2 border-color-secondary w-full h-60 shadow-md rounded-md mt-5 flex"
          v-for="hotel in searchByPropertyName"
          :key="hotel.hotel_id"
        >
          <div class="hotel-con m-5 w-2/6">
            <img :src="hotel.property.photoUrls" alt="hotel img" class="w-full h-full" />
          </div>
          <div class="rate w-1/6">
            <p class="mt-6">{{ hotel.property.name }}</p>
            <ul class="flex">
              <li></li>
              <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!! rate -->
              <li class="text-sm px-2">
                rate
                <span>
                  {{ hotel.property.reviewScore }}
                </span>
              </li>
            </ul>
            <p class="text-sm mt-5">
              {{ hotel.accessibilityLabel.split(" ").splice(0, 10).join(" ") }}
            </p>

            <button
              @click="hotelInfo(hotel.hotel_id)"
              class="bg-blue-700 rounded-md font-sm text-white py-1 px-4 mt-4 w-30 btn"
            >
              See availability <router-link to=""></router-link>
            </button>
          </div>
          <div class="price w-2/6 ml-10">
            <button
              class="bg-red-500 rounded font-sm text-white px-4 mt-6 w-30 btn ml-6"
            >
              Book now and receive 15% off
            </button>
            <button
              class="bg-green-700 rounded font-sm text-white px-2 w-30 btn ml-44 mt-10 py-2"
              v-if="hotel.property?.priceBreakdown?.strikethroughPrice?.value"
            >
              {{
                Math.round(
                  Number(
                    ((hotel.property.priceBreakdown.strikethroughPrice.value -
                      hotel.property.priceBreakdown.grossPrice.value) /
                      hotel.property?.priceBreakdown?.strikethroughPrice
                        .value) *
                      100
                  )
                )
              }}

              % off
            </button>
           <div class="flex ml-3 mt-2">
             <p class="text-danger text-lg font-normal px-2 line-through">{{
                hotel.property?.priceBreakdown?.strikethroughPrice?.value
              }}</p>
              <p class="font-bold text-xl">{{ hotel.property.priceBreakdown.grossPrice.value }}</p>
           </div>
            <p class="text-lg ml-5 mt-2">Includes taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// !!!!!!!!!!!!!!!!!!! imports/////////////////
import { ref, computed } from "vue";

let show = ref(false);
let cityNameGeneral = ref("");
let hotelrefData = ref("");
hotelrefData.value = JSON.parse(localStorage.getItem("hotelsData"));
console.log(hotelrefData.value.length);
console.log(hotelrefData.value);
cityNameGeneral.value = localStorage.getItem("cityNameGenertal");
let hoteldetailsInfo = ref("");
console.log(cityNameGeneral.value);

// ************import components****
import SearchComp from "@/components/searchComp.vue";
// import imgStar from '../assets/images/searchResults/fill.svg'
import imgStar from '/images/searchResults/fill.svg'







// ???????????????????????????? methods and functions//////////////////////////

// ****************** to get stars of the average*******
// let stars = ref([]);
// function getStars() {
//   for (let i = 0; i < hotelrefData.value[i].length; i++) {
//     //for movie avarage
//     let average = Math.round(hotelrefData.value[i].property.reviewScore);
//     console.log(average);
//     for (let j = 1; j <= average; j++) {
//       stars.value.push(j);
//       hotelrefData.value.property.reviewScore = this.stars;
//     }
//     stars.value = [];
//   }
// }
// onMounted(() => {
//   getStars(hotelrefData.value`{i}`.hotel.property.reviewScore);
// });
const hotelInfo = async function (hotelId) {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo",
    params: {
      hotel_id: hotelId,
      languagecode: "en-us",
    },
    headers: {
      "X-RapidAPI-Key": "0cd41a8041mshe07c3d2a6aba1b0p13e21djsnf2fd11aa4223",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    hoteldetailsInfo.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

// ????????????????????????????? get property name???????????????
let search = ref("");
const searchByPropertyName = computed(() => {
  return hotelrefData.value.filter((item) => {
    return item.property.name
      .toLowerCase()
      .includes(search.value.toLowerCase());
  });
});
console.log(searchByPropertyName);
</script>

<style scoped>
.main-sec {
  width: 93%;
  margin: auto;
}
.main-div {
  background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
}
.left {
  width: 295px;
}
.right {
  width: 915px;
  height: 500px;
}
</style>
   