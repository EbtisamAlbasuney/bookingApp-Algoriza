<template>
  <div>
    <div class="">
      <nav class="px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold md:text-2xl">
            <i class="fa-solid fa-plane-departure text-color-primary"></i>
            <span class="mx-1 text-gray-800">My Dream Place</span>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
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
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-gray-800 hover:text-color-primary">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-color-primary">
            <router-link :to="{ name: 'About' }">About</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-color-primary">
            <router-link :to="{ name: 'Discover' }">Discover</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-color-primary">
            <router-link :to="{ name: 'Activities' }">Activities</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-color-primary">
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
        </ul>
        <div class="sm:space-y-4">
          <button
            class="bg-color-primary rounded font-sm text-white py-1.5 px-4 md:mt-0 mt-3"
          >
            <router-link :to="{ name: 'Login' }">Sign In</router-link>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
