<template>
  <div
    class="flex flex-col min-h-screen font-Roboto "
  >
    <!-- <SiteNavigation /> -->
    <NavbarComp></NavbarComp>
    <RouterView class="mt-4" />
    <Footer></Footer>

  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
// import SiteNavigation from "./components/SiteNavigation.vue";
import NavbarComp from "./components/NavbarComp.vue";

import Footer from "./components/Footer.vue"

</script>

<style  scoped></style>