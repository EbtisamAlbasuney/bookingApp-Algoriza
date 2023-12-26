<template>
  <nav
    class="relative flex w-full items-center justify-between bg-#FBFBFB py-3 text-black "
  >
    <div class="ml-2 flex">
      <img :src="imgUrl" alt="logo" />
      <router-link :to="{ name: 'home' }">My Dream Place</router-link>
    </div>
  <!-- Mobile menu button -->
          <!-- <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div> -->
    <div class="links">
      <ul class="flex items-center justify-between gap-[1vw]">
        <li v-for="route in router.options.routes" :key="route.name">
          <router-link
            v-if="route.name != 'searchResults'"
            :to="{ name: route.name }"
            >{{ route.meta.title }}</router-link
          >
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-[#2F80ED] text-white"

    >
                <router-link :to="{name:'login'}">log in</router-link>

      
    </button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
 import imgUrl from '../assets/images/home images/bxs-plane-alt 1.svg'



// import { ref} from "vue";

const router = useRouter();
// const showMenu = ref(false);

console.log(router);
</script>

<style  scoped></style>
