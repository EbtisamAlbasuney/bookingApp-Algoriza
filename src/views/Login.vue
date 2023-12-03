<template>
  <div class="w-2/4 m-auto rounded-md ">
    <div class="card-body my-14 rounded-md ">
      <h3 class="text-3xl font-bold text-center text-green-800">Log in</h3>

      <form
        @submit.prevent="sendData(formData)"
        class="rounded-md shadow-emerald-600 my-8"
      >
        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            v-model="userEmail"
            class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
          />
        </div>

        <!-- Input--------------------->
        <div class="mb-3">
          <label class="form-label">Password</label>
          <div class="flex">
            <input
              v-bind:type="[showPassword ? 'text' : 'password']"
              v-model="userPass"
              class="form-control block w-full px-4 py-2 mt-2 bg-color-secondary border rounded-md focus:outline-none"
            />

            <div class="input-group-append mt-5 -ml-6">
              <span
                class="input-group-text"
                @click="showPassword = !showPassword"
              >
                <i
                  class="fa"
                  :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>


        <div class="mb-3 text-center">
          <button
            class="w-full mt-6 px-4 py-2 tracking-wide bg-color-primary text-white transition-colors duration-200 transform bg-blue-700 rounded-md focus:outline-none"
            type="submit"
          >
            log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onUpdated } from "vue";
const showPassword = ref(false);
let userEmail = ref("");
let userPass = ref("");
import axios from "axios";
let formData = ref("");
onUpdated(() => {
  formData = {
    email: userEmail.value,
    password: userPass.value,
  };

  console.log(formData);
});
const sendData = async (formData) => {
  await axios
    .post("https://movies-api.routemisr.com/signin", formData, {
      headers: {},
    })
    .then((res) => {
      console.log(res);
      console.log(formData);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
// const showConfirmPassword = ref(false);
</script>
