<template>
  <KeepAlive>
    <form
      @submit.prevent
      class="search-section bg-white shadow-md w-4/5 rounded m-auto -mt-8 flex justify-between items-center gap-3 px-3 py-3 text-black"
    >
      <!-- !!! where you go -->
      <div
        class="w-72 where-you-go component-custom rounded flex justify-start p-3 shadow-md"
        @click="getCities"
      >
        <img :src="imgPlace" alt="location" class="ml-2 mr-3">
        <input
          name=""
          class="relative focus:outline-none"
          v-model="cityNAME"
          placeholder="where-you-go"
          @click="showCityName"
        />
        <ul class="absolute  mt-10 w-60 rounded-md shadow-md bg-white z-50 " v-show="hide">
          <li
            @click="getvalues(city.city_name, city.dest_id)"
            v-for="city in storedCities"
            id=""
            :key="city.dest_id"
            class="mt-3 cursor-pointer w-50 px-5 py-2 text-gray hover:bg-color-secondary "
          >
            {{ city.city_name }}
          </li>
        </ul>
      </div>
      <!-- ***check in div -->
      <div
        class="check-in-time flex rounded gap-2 component-custom shadow-md justify-center items-center"
      >
        <VueDatePicker
          v-model="checkInDate"
          :enable-time-picker="false"
          placeholder="Select a Date"
          :min-date="new Date()"
          @update:model-value="handleUpdate"
          model-type="yyyy-MM-dd"
        
        />
      </div>
      <!-- ?????? check out div -->
      <div
        class="check-out-time flex rounded gap-2 component-custom shadow-md justify-center items-center"
      >
        <VueDatePicker
          v-model="checkOutDate"
          :enable-time-picker="false"
          placeholder="Select a Date"
          :min-date="new Date()"
          @update:model-value="handleUpdate"
          model-type="yyyy-MM-dd"
          
        />
      </div>
      <!-- ??????? guests -->
      <div
        id="guests"
        class="flex shadow-md component-custom rounded w-72 gap-2 p-3 justify-center items-center"
      >
        <img :src="imgSquare" alt="user-square" class="ml-2 mr-3">
        <input
          class="bg-transparent border-b-0  focus:outline-none "
          type="text"
          placeholder="guests"
          v-model="adults"
        />
      </div>
      <div
        class="rooms flex shadow-md component-custom rounded-md w-72 p-3 gap-2 justify-center items-center"
      >
                <img :src="imgRoom" alt="room" class="ml-2 mr-3">

        <input
          class="bg-transparent border-b-0  focus:outline-none"
          type="text"
          placeholder="rooms"
          v-model="bed"
        />
      </div>
      <button
        type="button"
        class="rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-[#2F80ED] text-white"
        @click="searchHotels"
      >
        search
      </button>
    </form>
  </KeepAlive>
</template>

<script setup>
import { ref } from "vue";

import imgPlace from '../assets/images/searchResults/location 1.svg'
import imgSquare from '../assets/images/searchResults/user-square 1.svg'
import imgRoom from "../assets/images/searchResults/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg"



import { useRouter } from "vue-router";
const cityNameGeneral = ref("");
const citIDGeneral = ref("");
// let date = ref();
const checkInDate = ref(new Date());
const checkOutDate = ref(new Date());
// const startDate = ref(new Date(2023, 12));
import axios from "axios";
let cityNAME = ref("");

let adults = ref("");
let bed = ref("");
const hide = ref(false);
const Router = useRouter();
// ******methods*****

let storedCities = ref([]);
let hotels = ref([]);
const getCities = async function () {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query: "egypt" },
    headers: {
     'X-RapidAPI-Key': 'eae980af47msh50ef394d7486576p1dfc26jsn090619ef6283',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    storedCities.value = response.data.data;
    console.log(storedCities);
  } catch (error) {
    console.error(error);
  }
};

const searchHotels = async function () {
  // const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: citIDGeneral.value,
      search_type: "CITY",
      arrival_date: checkInDate.value,
      departure_date: checkOutDate.value,
      adults: adults.value,
      children_age: "0,17",
      room_qty: bed.value,
      page_number: "1",
      languagecode: "en-us",
      currency_code: "AED",
    },
    headers: {
   'X-RapidAPI-Key': 'eae980af47msh50ef394d7486576p1dfc26jsn090619ef6283',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    hotels = response.data.data.hotels;
    localStorage.setItem("hotelsData", JSON.stringify(hotels));
    Router.push("/searchResults");
  } catch (error) {
    console.error(error);
  }
};

function getvalues(cityName, cityId) {
  cityNameGeneral.value = cityName;
  citIDGeneral.value = cityId;
  console.log(cityNameGeneral.value);
  console.log(citIDGeneral.value);
  hide.value = !hide.value;
  cityNAME.value = cityName;
}
let updatedDate = ref("");
function handleUpdate() {
  updatedDate.value = checkInDate.value;
  console.log(updatedDate.value);
}

function showCityName() {
  hide.value = !hide.value;
}
</script>