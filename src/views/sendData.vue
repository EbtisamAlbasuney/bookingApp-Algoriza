<template>
  <div>
    <input type="text" v-model="userEmail" />
    <input type="text" v-model="userPass" />
    <button type="submit" @click="sendData(formData)">ssssss</button>
  </div>
</template>

<script setup>
import axios from "axios";
let formData = {
  email: "sadek@mo.com",
  password: "Ahmed@123",
};

const sendData = async (formData) => {
  await axios
    .post("https://movies-api.routemisr.com/signin", formData, {
      headers: {},
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
</script>

<style  scoped></style>
